<script lang="ts">
	import { enhance } from "$app/forms";

    export let form;
</script>
<div class="w-full flex flex-col items-center">
	<div class="container space-y-4 p-10">
		<h1>
            Create Report Title
        </h1>

        <hr>

        <div class="card p-4">
            <form use:enhance method="POST" class="text-token space-y-4">

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
        </div>
	</div>
</div>