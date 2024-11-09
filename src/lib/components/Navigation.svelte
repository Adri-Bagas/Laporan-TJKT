<script lang="ts">
import { getDrawerStore } from "@skeletonlabs/skeleton";

const drawerStore = getDrawerStore();

function drawerClose(): void {
    drawerStore.close();
}
</script>


<div class="p-4 pb-20 space-y-4 overflow-y-auto">
    <p class="font-bold pl-4 text-2xl">Your Teams</p>
    <nav class="list-nav px-4 ">
        <ul>
            <li><a href="/home" on:click={drawerClose}>Home</a></li>
        </ul>
    </nav>

</div>