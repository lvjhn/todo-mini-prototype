<script>
    import TaskList from '../components/TaskList.svelte';
    import { onClient } from '@/helpers/on-client'     
    import { onMount } from 'svelte'

    let loaded = false; 

    onMount(() => {
        loaded = true;
    })


</script> 

<div class="home"> 
    {#if loaded}
        <div class="task-list-container">
            <TaskList />
        </div>
    {:else} 
        <div class="loading"> 
            <div class="loading-text"> 
                Loading app...
            </div> 
        </div> 
    {/if}
</div>

<style lang="scss"> 
    .home {
        width: 960px;
        margin: 200px auto;

        .loading {
            text-align: center;
        }
    }
</style>