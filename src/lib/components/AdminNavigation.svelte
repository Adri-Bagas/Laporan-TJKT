<script lang="ts">
    import { getDrawerStore } from "@skeletonlabs/skeleton";
    
    const drawerStore = getDrawerStore();
    
    function drawerClose(): void {
        drawerStore.close();
    }
    </script>
    
    
    <div class="p-4 pb-20 space-y-4 overflow-y-auto">
    
        <p class="font-bold pl-4 text-2xl">Admins Stuff</p>
        <nav class="list-nav px-4 ">
            <ul>
                <li><a href="/admin/dash" on:click={drawerClose}>Dashboard</a></li>
            </ul>
            <ul>
                <li><a href="/admin/users" on:click={drawerClose}>List Of User</a></li>
            </ul>
        </nav>
    
        <p class="font-bold pl-4 text-2xl">Reports Stuff</p>
        <nav class="list-nav px-4 ">
            <ul>
                <li><a href="/admin/reports" on:click={drawerClose}>List Of Reports</a></li>
            </ul>
            <ul>
                <li><a href="/admin/reports/req" on:click={drawerClose}>Request</a></li>
            </ul>
            <ul>
                <li><a href="/admin/reports/title" on:click={drawerClose}>Make A Title</a></li>
            </ul>
        </nav>
    
        <p class="font-bold pl-4 text-2xl">Teams Stuff</p>
        <nav class="list-nav px-4 ">
            <ul>
                <li><a href="/admin/teams" on:click={drawerClose}>List Of Reports</a></li>
            </ul>
        </nav>
    </div>