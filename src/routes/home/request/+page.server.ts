import { db } from '$lib/db/db.server';
import { pklReports } from '$lib/db/schema';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { makeExisting, makeNew } from '$lib/scripts/reports';

export const load = (async () => {

    const reports = await db.select().from(pklReports)

    return {
        reports
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());

        if (!formData.title || !formData.description || !formData.type) {
            return fail(400, {
                err: 'Missing title or description or type'
            });
        }

        const { title, description, type } = formData as { title: string; description: string; type: string; };

        let err: string | null = "";

        if(type == "new"){
            err = await makeNew(title, description, event.locals.user.teamId);
        }

        if(type == "existing"){
            err = await makeExisting(title, event.locals.user.teamId);
        }
        

        if (err) {
            return fail(401, {
                err
            });
        }

        throw redirect(302, '/auth/login');
    }
}