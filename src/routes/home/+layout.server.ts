import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {

    //get data user
    const user = event.locals.user;

    if (!user) {
        throw redirect(302, '/auth/login');
    }

    return {};
}) satisfies LayoutServerLoad;