
import { db } from '$lib/db/db.server';
import { pklReports } from '$lib/db/schema';
import type { PageServerLoad } from './$types';

export const load = (async () => {

    const reports = await db.select().from(pklReports);

    return {
        reports
    };
}) satisfies PageServerLoad;