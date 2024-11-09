<script lang="ts">
	import { Tab, TabGroup, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { Table } from '@skeletonlabs/skeleton';


	let pageData = $props();

	let { user, students, pklReport } = pageData.data;

	let tabSet: number = $state(0);	

	const getPendingOrACC = pklReport.find((e: any) => {
		return e.teams_to_pkl_reports.status == "PENDING"
	})

	const getRejected = getPendingOrACC ? null : pklReport[pklReport.length - 1]

	let mappedValue = pklReport.map((e: any) => {
		return {
			judul: e.pklReports.title,
			status: e.teams_to_pkl_reports.status
		}
	})

	const tableReq: TableSource = {
		head: ['Title', 'Status'],
		body: tableMapperValues(mappedValue, ['judul', 'status']),
		meta: tableMapperValues(mappedValue, ['judul', 'status']),
	};

	const tableSimple: TableSource = {
		head: ['Nisn', 'Name', 'Class'],
		body: tableMapperValues(students, ['nisn', 'name', 'class']),
		meta: tableMapperValues(students, ['id', 'nisn', 'name', 'class']),
	};

</script>

<div class="w-full flex flex-col items-center">
	<div class="container space-y-4 p-10">
		<TabGroup>
			<Tab bind:group={tabSet} name="tab1" value={0}>
				<span>Teams Members</span>
			</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1}>PKL Report</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<div class="card p-4">
						<h2>Team Members | {user.company}</h2>
						<hr />

						<div class="m-4 p-4 card variant-ghost-primary">
							<Table source={tableSimple}/>
						</div>
					</div>
				{:else if tabSet === 1}
				<div class="card p-4">

					<div class="m-4 p-4 card variant-ghost-primary">
						<h3>Report status</h3>
						<hr>
						{#if pklReport.length === 0}
							<p class="m-2">You haven't send any Request yet! <a href="/home/request" class="anchor">Send One Here!</a></p>
						{:else}
							{#if getPendingOrACC.teams_to_pkl_reports.status == "ACCEPT"}
								<p class="m-2">You have a request has been Accepted! by this title <b>{getPendingOrACC.pklReports.title}</b></p>
							{:else if getPendingOrACC.teams_to_pkl_reports.status == "PENDING"}
								<p class="m-2">Your request with this title - <b>{getPendingOrACC.pklReports.title}</b> - is still on Pending!</p>
							{:else if getRejected != null}
								<p class="m-2">Your request with this title - <b>{getPendingOrACC.pklReports.title}</b> - has been rejected!</p>
							{/if}
						{/if}
					</div>

					<div class="m-4 p-4 card variant-ghost-primary">
						<h2>Request History</h2>
						<hr>
						{#if pklReport.length === 0}
							<p class="m-2">You haven't send any Request yet! <a href="/home/request" class="anchor">Send One Here!</a></p>
							{:else}
							<div class="">
								<Table source={tableReq}/>
							</div>
						{/if}
					</div>
				</div>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
</div>
