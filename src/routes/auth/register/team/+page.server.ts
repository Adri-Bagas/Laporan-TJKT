import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { register } from '$lib/scripts/auth';


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

        if (!formData.username || !formData.company || !formData.password || !formData.students) {
            return fail(400, {
                err: 'Missing email or password or students or company'
            });
        }

        const { username, password, company, students } = formData as { username: string; company: string; password: string; students: string };

        const studentsJson = JSON.parse(students)

        const [ _, err ] = await register(username, null, password, 'team', studentsJson, company);

        if (err) {
            return fail(401, {
                err
            });
        }

        throw redirect(302, '/auth/login');
    }
}