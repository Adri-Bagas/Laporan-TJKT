import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {

    event.cookies.delete('AuthorizationToken', {
        path: '/'
    })

    throw redirect(302,"/auth/login")
};