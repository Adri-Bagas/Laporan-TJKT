import { db } from "$lib/db/db.server";
import { pklReports, teamsToPklReports } from "$lib/db/schema";
import { and, eq, or, sql } from "drizzle-orm";

export const makeNew = async (title: string, description: string, id: string) => {
    const existingReports = await db.select().from(pklReports).where(eq(pklReports.title, title))

	if (existingReports.length > 0) {
		return 'Title already exists' ;
	}

    const cekIfExistACC = await db.select().from(teamsToPklReports)
    .where(
        and(
            eq(teamsToPklReports.teamId, id), 
            or(
                eq(teamsToPklReports.status, "ACCEPT"),
                eq(teamsToPklReports.status, "PENDING")
            ),
        )
    );

    if(cekIfExistACC.length > 0){
        return 'You have a request that already been accepted or are still in proccess!' ;
    }

    const report = await db.insert(pklReports).values({
        title,
        description
    }).returning();

    // make connections
    await db.insert(teamsToPklReports).values({
        teamId: id,
        pklReportId: report[0].pklReportId!,
    })

    return null
}


export const makeExisting = async (reportId: string, id: string) => {
    const existingTeamReports = await db.select().from(teamsToPklReports).where(eq(teamsToPklReports.pklReportId, reportId))

	if (existingTeamReports.length > 3) {
		return 'Max number team is using this report !' ;
	}

    const cekIfExistACC = await db.select().from(teamsToPklReports)
    .where(
        and(
            eq(teamsToPklReports.teamId, id), 
            or(
                eq(teamsToPklReports.status, "ACCEPT"),
                eq(teamsToPklReports.status, "PENDING")
            ),
        )
    );

    if(cekIfExistACC.length > 0){
        return 'You have a request that already been accepted or are still in proccess!' ;
    }

    const cekIfAlreadyRejected = await db.select().from(teamsToPklReports)
    .where(
        sql`${teamsToPklReports.teamId} = ${id} and ${teamsToPklReports.pklReportId} = ${reportId} and ${teamsToPklReports.status} = 'REJECTED'`
    ); 

    if(cekIfAlreadyRejected.length > 0){
        return 'You have been rejected with this title!' ;
    }

    // make connections
    await db.insert(teamsToPklReports).values({
        teamId: id,
        pklReportId: reportId,
    })

    return null
}