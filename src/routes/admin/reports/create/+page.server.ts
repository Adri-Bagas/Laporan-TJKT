import { makeNewAdmin } from '$lib/scripts/reports';
import type { PageServerLoad } from './$types';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());

        if (!formData.title || !formData.description) {
            return fail(400, {
                err: 'Missing title or description or type'
            });
        }

        const { title, description } = formData as { title: string; description: string; type: string; };

        let err: string | null = "";

        err = await makeNewAdmin(title, description);
    
        if (err) {
            return fail(401, {
                err
            });
        }

        throw redirect(302, '/admin/reports');
    }
}