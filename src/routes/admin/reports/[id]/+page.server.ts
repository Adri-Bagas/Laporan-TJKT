import { db } from '$lib/db/db.server';
import { pklReports, teams, teamsToPklReports } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {

    const report = (await db.select().from(pklReports).where(eq(pklReports.pklReportId, params.id)))[0];

    const reportsTeam = await db.select().from(teamsToPklReports).where(eq(teamsToPklReports.pklReportId, params.id)).innerJoin(teams, eq(teamsToPklReports.teamId, teams.teamId));

    return {
        report,
        reportsTeam
    };
}) satisfies PageServerLoad;