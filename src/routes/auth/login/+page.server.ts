import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { login } from '$lib/scripts/auth';


export const load: PageServerLoad = async (event) => {

    const user = event.locals.user;

    if (user) {
        throw redirect(302, '/home');
    }

    return {};
};

export const actions: Actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());

        if (!formData.email || !formData.password) {
            return fail(400, {
                err: 'Missing email or password'
            });
        }

        const { email, password } = formData as { email: string; password: string };

        const [ token, err, type ] = await login(email, password);

        if (err) {
            return fail(401, {
                err
            });
        }

        event.cookies.set('AuthorizationToken', `Bearer ${token}`, {
            httpOnly: true,
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 8 // 8 hours
        });

        if(type == "team"){
            throw redirect(302, '/home');
        }

        throw redirect(302, '/admin');
    }
}