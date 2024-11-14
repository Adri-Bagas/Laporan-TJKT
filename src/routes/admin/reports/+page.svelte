<script lang="ts">
	import { onMount } from 'svelte';
    import type { PageData } from './$types';
	import Datatable from './Datatable.svelte';
    
    const { data }: PageData = $props();

    let { reports } = $state(data);

    onMount(() => {
        reports  = reports.map((e: any, i: number) => {
        return {
            index: i + 1,
            ...e,
        }
    })
    })

</script>

<div class="container p-10 space-y-4">
    <dir class="flex justify-between">
        <h1>Reports</h1>

        <a href="/admin/reports/create" class="btn variant-filled-primary">
            Add
        </a>
    </dir>
	<hr />
	<div class="p-4 card">
        <Datatable data={reports} />
    </div>
</div>