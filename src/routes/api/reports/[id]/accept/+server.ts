import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/db/db.server';
import { teamsToPklReports } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

export const POST: RequestHandler = async (event) => {

    let user = event.locals.user

    if(!user){
        throw redirect(302, '/auth/login')
    }

    if(user.type == "admin"){
        throw redirect(302, '/home')
    }

    const { params } = event

    await db.update(teamsToPklReports).set({
        status: "ACCEPT",
    }).where(eq(teamsToPklReports.id, Number(params.id)))

    throw redirect(300, `/admin/reports/${params.id}`);
};