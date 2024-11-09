import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/db/db.server';
import { pklReports, students as schemaStudent, teamsToPklReports } from '$lib/db/schema';
import { desc, eq } from 'drizzle-orm';

export const load = (async ( event ) => {

    //get data user
    const user = event.locals.user;

    if (!user) {
        throw redirect(302, '/auth/login');
    }

    if(user.type != "team"){
        throw redirect(302, '/admin');
    }

    //student data
    const students = await db.select().from(schemaStudent).where(eq(schemaStudent.teamId, user.teamId))

    //their laporan data
    const pklReport = await db.select().from(teamsToPklReports).where(eq(teamsToPklReports.teamId, user.teamId)).leftJoin(pklReports, eq(pklReports.pklReportId, teamsToPklReports.pklReportId))

    return {
        user, students, pklReport
    };
}) satisfies PageServerLoad;