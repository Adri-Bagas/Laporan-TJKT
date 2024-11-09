<script lang="ts">
	import {
		AppShell,
		AppBar
	} from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/Footer.svelte';

</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64" scrollbarGutter="auto">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<strong class="text-xl uppercase">Skeleton</strong>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	
	<!-- Router Slot -->
    <div class="flex items-center justify-center min-h-full">
        <div class="card w-full max-w-sm p-6 rounded-lg shadow-md">
            <h1>Hello!</h1>
    
            <hr class="hr mb-2">
    
            <div>
                <h4 class="mb-4">Welcome To The App!</h4>

                <div class="w-full flex flex-row justify-evenly">
                    <a href="/auth/login" class="btn variant-filled-primary w-1/3">Login</a>
                    <a href="/auth/register/team" class="btn variant-ghost-primary w-1/3">Register</a>
                </div>
            </div>
        </div>
    </div>
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>