<script lang="ts">
	import Pagination from '$lib/components/tables/Pagination.svelte';
	import RowCount from '$lib/components/tables/RowCount.svelte';
	import RowsPerPage from '$lib/components/tables/RowsPerPage.svelte';
	import Search from '$lib/components/tables/Search.svelte';
	import ThSort from '$lib/components/tables/ThSort.svelte';
	import Icon from '@iconify/svelte';
    export let data: any[]
    import { DataHandler } from '@vincjo/datatables/legacy';

const handler = new DataHandler(data, { rowsPerPage: 10,  });
const rows = handler.getRows();
</script>
        


<div class=" overflow-x-auto space-y-2">
    <header class="flex justify-between gap-4">
        <Search {handler} />
        <RowsPerPage {handler} />
    </header>
    <table class="table table-hover table-compact table-auto w-full ">
        <thead>
            <tr>
                <ThSort {handler} orderBy="index">No</ThSort>
                <ThSort {handler} orderBy="title">Title</ThSort>
                <ThSort {handler} orderBy="description">Description</ThSort>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each $rows as row}
                <tr>
                    <td>{row.index}</td>
                    <td>{row.title}</td>
                    <td>{row.description}</td>
                    <td><div><a class="btn variant-filled-tertiary" href="/admin/reports/{row.pklReportId}"><Icon icon="bx:search" /></a> | <a class="btn variant-filled-warning" href="/admin/reports/delete/{row.pklReportId}"><Icon icon="icon-park-twotone:delete" /></a></div></td>
                </tr>
            {/each}
        </tbody>
    </table>
    <footer class="flex justify-between">
        <RowCount {handler} />
        <Pagination {handler} />
    </footer>
</div>
        