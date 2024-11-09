<script lang="ts">

    let tabSet: number = $state(0);	
	import { enhance } from "$app/forms";
	import { Tab, TabGroup } from "@skeletonlabs/skeleton";

    let pageData = $props();

	let { reports } = pageData.data;

    let selectedReportsId = $state('')

    let selectedReports = $derived.by(() => {

        let search;

        reports.forEach((element:any) => {
            if(element.pklReportId == selectedReportsId) search = element;
        });

        if(search == undefined) return {description: ""};

        return search;
    })


</script>
<div class="w-full flex flex-col items-center">
	<div class="container space-y-4 p-10">
		<h1>
            Request Report Title
        </h1>

        <hr>

        <div class="card p-4">
            <TabGroup>
                <Tab bind:group={tabSet} name="tab1" value={0}>
                    New Title
                </Tab>
                <Tab bind:group={tabSet} name="tab2" value={1}>Existing Title</Tab>
                <!-- Tab Panels --->
                <svelte:fragment slot="panel">
                    {#if tabSet === 0}
                    <form use:enhance method="POST" class="text-token space-y-4">

                        <input type="hidden" value="new" name="type">

                        <div>
                            <label for="title" class="block">Report Title</label>
                            <input class="input" type="text" placeholder="Your Title" name="title"/>
                        </div>
        
                        <div>
                            <label class="label">
                                <span>Description</span>
                                <textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." name="description"></textarea>
                            </label>
                        </div>
        
                        <div class="flex justify-between">
        
                            <a class="btn variant-filled-secondary" href="/home">
                                Cancel
                            </a>
        
                            <button class="btn variant-filled-primary">
                                Submit
                            </button>
                        </div>
                        
                    </form>
                    {:else if tabSet === 1}
                    <form use:enhance method="POST" class="text-token space-y-4">

                        <input type="hidden" value="existing" name="type">

                        <div>
                            <label for="title" class="block">Report Title</label>
                            <select class="select" bind:value={selectedReportsId} name="title">
                                <option selected disabled>Select the existing title!</option>
                                {#each reports as report}
                                    <option value="{report.pklReportId}">{report.title}</option>
                                {/each}
                            </select>
                        </div>
        
                        <div>
                            <label class="label">
                                <span>Description</span>
                                <textarea class="textarea" rows="4" readonly name="description">{selectedReports.description}</textarea>
                            </label>
                        </div>
        
                        <div class="flex justify-between">
        
                            <a class="btn variant-filled-secondary" href="/home">
                                Cancel
                            </a>
        
                            <button class="btn variant-filled-primary">
                                Submit
                            </button>
                        </div>
                        
                    </form>
                    {/if}
                </svelte:fragment>
            </TabGroup>
        </div>
	</div>
</div>