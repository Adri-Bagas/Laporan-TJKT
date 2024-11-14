<script lang="ts">
	import Pagination from '$lib/components/tables/Pagination.svelte';
	import RowCount from '$lib/components/tables/RowCount.svelte';
	import RowsPerPage from '$lib/components/tables/RowsPerPage.svelte';
	import Search from '$lib/components/tables/Search.svelte';
	import ThSort from '$lib/components/tables/ThSort.svelte';
	import Icon from '@iconify/svelte';
    export let data: any[]
    import { DataHandler } from '@vincjo/datatables/legacy';

    import { enhance } from "$app/forms";

const handler = new DataHandler(data, { rowsPerPage: 10,  });
const rows = handler.getRows();
</script>
        


<div class="overflow-x-auto space-y-2">
    <header class="flex justify-between gap-4">
        <Search {handler} />
        <RowsPerPage {handler} />
    </header>
    <table class="table table-hover table-compact table-auto w-full ">
        <thead>
            <tr>
                <ThSort {handler} orderBy="index">No</ThSort>
                <ThSort {handler} orderBy="name">Teams</ThSort>
                <ThSort {handler} orderBy="company">Company</ThSort>
                <ThSort {handler} orderBy="status">Status</ThSort>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each $rows as row}
                <tr>
                    <td>{row.index}</td>
                    <td>{row.name}</td>
                    <td>{row.company}</td>
                    <td>{row.status}</td>
                    {#if row.status == "PENDING"}
                    <td>
                            <div class="flex flex-row gap-x-2">
                                <form method="POST" use:enhance action="/api/reports/{row.pklReportId}/accept">
                                    <button type="submit" class="btn variant-ghost-tertiary" >
                                        <Icon icon="iconamoon:check-bold" />
                                    </button>
                                </form>

                                <button type="submit" class="btn variant-ghost-warning" >
                                    <Icon icon="fa6-solid:xmark" />
                                </button>
                                
                        </div>
                        
                    </td>
                    {:else}
                        <td></td>
                    {/if}
                </tr>
            {/each}
        </tbody>
    </table>
    <footer class="flex justify-between">
        <RowCount {handler} />
        <Pagination {handler} />
    </footer>
</div>
        