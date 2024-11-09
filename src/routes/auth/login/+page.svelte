<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
    import type { ActionData } from './$types';
    import { enhance } from '$app/forms';

    export let form: ActionData;

</script>



{#if form?.err}
    <aside class="alert variant-filled-error absolute w-1/4 top-20 right-6" transition:fade={{duration: 200}}>
        <div><Icon icon="mdi:skull-outline" width={64} height={64} /></div>
        <div class="alert-message">
            <h3 class="h3">Error Woy!</h3>
            <p>{form?.err}</p>
        </div>
    </aside>
{/if}
            

<div class="flex items-center justify-center min-h-full">
    <div class="card w-full max-w-sm p-6 rounded-lg shadow-md">
        <h1>Login</h1>
        <hr class="hr mb-2">
        <form method="post" use:enhance class="space-y-4">
            <div>
                <label for="username" class="block">Email / Team Name</label>
                <input class="input" type="text" placeholder="Your Email / Team Name" name="email"/>
            </div>

            <div>
                <label for="password" class="block">Password</label>
                <input class="input" type="password" placeholder="Your Password" name="password"/>
            </div>

            <button type="submit" class="w-full py-2 mt-4 btn variant-filled-primary font-semibold">
                Login
            </button>

            <a class="btn w-full variant-ghost-primary" href="/auth/register/team">Register your team</a>
        </form>
    </div>
</div>