<script lang="ts">
	import {
		AppShell,
		AppBar
	} from '@skeletonlabs/skeleton';
	import Navigation from "$lib/components/Navigation.svelte";
	import Footer from '$lib/components/Footer.svelte';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	initializeStores();

const drawerStore = getDrawerStore();

function drawerOpen(): void {
	drawerStore.open({});
}

</script>

<Drawer>
	<Navigation />
</Drawer>


<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64" scrollbarGutter="auto">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" aria-label="burger" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">Skeleton</strong>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<a href="/auth/logout" class="btn variant-ghost-primary">Log Out</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>