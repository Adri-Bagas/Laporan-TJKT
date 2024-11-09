<script lang="ts">

    import Icon from '@iconify/svelte';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

    let students = '';

    let studentDatas = [{
        'nisn': '',
        'name': '',
        'class': ''
    }];

    function addStudent() {
        studentDatas.push({
            'nisn': '',
            'name': '',
            'class': ''
        })
        studentDatas = studentDatas
    }

    function removeStudent(index: number){
        studentDatas.splice(index, 1)

        studentDatas = studentDatas
    }

    $: {
        students = JSON.stringify(studentDatas)
    }

    export let form: ActionData;
</script>

{#if form?.err}
    <aside class="alert variant-filled-error absolute w-1/4 top-20 right-6" transition:fade={{duration: 200}}>
        <div><Icon icon="mdi:skull-outline" width={64} height={64} /></div>
        <div class="alert-message">
            <h3 class="h3">Error Woy!</h3>
            <p>{form?.err}</p>
        </div>
    </aside>
{/if}


<div class="flex items-center justify-center min-h-full">
    <div class="card w-full sm:max-w-sm md:max-w-2xl p-6 rounded-lg shadow-md">
        <h1>Register</h1>

        <hr class="hr mb-2">

        <form method="POST" use:enhance class="space-y-4">
            <div>
                <label for="username" class="block">Team Name</label>
                <input class="input" type="text" placeholder="Team Name" name="username"/>
            </div>

            <div>
                <label for="company" class="block">Company Name</label>
                <input class="input" type="text" placeholder="Company Name" name="company"/>
            </div>

            <div>
                <label for="password" class="block">Password</label>
                <input class="input" type="text" placeholder="Your Password" name="password"/>
            </div>

            <div class="card variant-ghost-tertiary p-6">
                <h4>Members | <button class="btn inline m-0 p-0" on:click={() => {addStudent()}}><Icon icon="icon-park-outline:add" class="inline"/></button></h4>

                {#each studentDatas as _, i}
                <div class="flex flex-row gap-4 items-center">
                    <div>
                        <label for="" class="block">Nisn</label>
                        <input class="input" type="text" placeholder="NISN" bind:value={studentDatas[i].nisn}/>
                    </div>

                    <div>
                        <label for="" class="block">Name</label>
                        <input class="input" type="text" placeholder="Name" bind:value={studentDatas[i].name}/>
                    </div>

                    <div>
                        <label for="" class="block">Class</label>
                        <input class="input" type="text" placeholder="Class" bind:value={studentDatas[i].class}/>
                    </div>

                    <button class="btn m-0 p-0 h-4" on:click={() => {removeStudent(i)}}><Icon icon="mynaui:trash" class="inline" height={28} width={28}/></button>
                </div>
                {/each}

            </div>

            <input type="hidden" bind:value={students} name="students">

            <button type="submit" class="w-full py-2 mt-4 btn variant-filled-primary font-semibold">
                Register
            </button>

            <a class="btn w-full variant-ghost-primary" href="/auth/login">Login!</a>
        </form>
    </div>
</div>