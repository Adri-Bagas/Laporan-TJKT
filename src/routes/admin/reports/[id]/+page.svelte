<script lang="ts">
    import type { PageData } from './$types';
	import Datatable from './Datatable.svelte';
    
    let { data }: PageData = $props();

    const mapedTeamsData = data.reportsTeam.map((e: any, i: number) => {
        return {
            index: i + 1,
            ...e.teams,
            status: e.teams_to_pkl_reports.status
        }
    })

    console.log(mapedTeamsData)
</script>

<div class="w-full flex flex-col items-center">
	<div class="container space-y-4 p-10">
		<h1>
            Report Title Details
        </h1>

        <hr>

        <div class="card p-4">
            <div class="text-token space-y-4">
                <div>
                    <label for="title" class="block">Report Title</label>
                    <input class="input" type="text" placeholder="Your Title" readonly value={data.report.title}/>
                </div>

                <div>
                    <label class="label">
                        <span>Description</span>
                        <textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." name="description" readonly>{data.report.description}</textarea>
                    </label>
                </div>
            </div>
        </div>

        <h2>
            Teams With Request
        </h2>

        <hr>

        <div class="p-4 card">
            <Datatable data={mapedTeamsData} />
        </div>
	</div>
</div>