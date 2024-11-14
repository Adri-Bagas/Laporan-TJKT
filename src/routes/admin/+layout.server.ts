import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {

    const user = event.locals.user;

    if (!user) {
        throw redirect(302, '/auth/login');
    }

    if(user.type != "admin"){
        throw redirect(302, '/home');
    }

    return {};
}) satisfies LayoutServerLoad;