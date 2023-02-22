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
        <div class="task-header"> 
            <h1>Todo-Mini</h1>
        </div>
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

        .task-header {
            text-align: center;
        }

        .loading {
            text-align: center;
        }
    }
</style>