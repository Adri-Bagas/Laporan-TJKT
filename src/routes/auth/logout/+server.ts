import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {

    event.cookies.delete('AuthorizationToken', {
        httpOnly: true,
        path: '/',
        secure: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 8 // 8 hours
    })

    throw redirect(302,"/auth/login")
};