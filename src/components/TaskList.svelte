<script> 
    import TaskItem from "./TaskItem.svelte";
    import { Input } from '@svelteuidev/core';
    import Icon from '@iconify/svelte';
    import { onClient } from '@/helpers/on-client';
    import { dndzone } from "svelte-dnd-action";
    import { flip } from 'svelte/animate';


    let tasks; 

    let addTaskText = "";

    onClient(async () => {
        tasks = (await import("@/stores/tasks")).tasks; 
    });

    function onConsider(e) {
        tasks.set(e.detail.items);
    }

    function onFinalize(e) {
        tasks.set(e.detail.items);
    }

    async function doAddTask() {
        if(addTaskText == "") return;
        await onClient(async () => {
            const tasks = (await import("@/stores/tasks")).tasks; 
            await tasks.create({
                description: addTaskText, 
                isDone: false
            });
            addTaskText = "";
        });
    }

    async function handleNewTaskKeyUp(e) {
        if(e.key == "Enter") {
            await doAddTask();
        }
    }

</script> 

<div class="task-list"> 
    <div class="controls">
        <div class="new-task-input-container">
            <Input 
                class="new-task-input"
                type="text" 
                bind:value={addTaskText}
                on:keyup={handleNewTaskKeyUp}
                style="
                    font-size: 20px; 
                    outline: none;
                " />
        </div>
        <div 
            class="add-task-button-container"
            on:click={doAddTask}
        > 
            <Icon 
                class="add-task-button"
                icon="material-symbols:add-box-rounded" 
                height="35"   
            />
        </div>
    </div>
    {#if tasks}
        {#if $tasks.length > 0}
            <div    
                class="items" 
                use:dndzone={{items: $tasks, duration: 300, dropTargetStyle: {}}}
                on:consider={onConsider}
                on:finalize={onFinalize} > 
                {#each $tasks as task, index (task.id) }
                    <div animate:flip={{duration: 300}}>
                        <TaskItem {task} {index} />
                    </div>
                {/each}
            </div>
        {:else} 
            <div class="no-tasks"> 
                No Tasks at the Moment
            </div> 
        {/if}
    {/if}
</div>

<style lang="scss"> 
    .task-list {
        background-color: rgb(234, 234, 234);
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 2px black;

        .controls {
            display: flex; 
            gap: 5px;

            .new-task-input-container {
                flex-grow: 1;
            }

            .add-task-button-container:hover {
                opacity: 0.8;
                cursor: pointer;
            }

            .add-task-button-container:active {
                opacity: 0.5;
            }
        }

        .items {
            margin-top: 10px;
            display: flex; 
            gap: 5px; 
            flex-direction: column;
        }

        .no-tasks {
            text-align: center;
            padding: 30px;
            color: grey;
            font-weight: bold; 
            border-radius: 5px; 
            margin-top: 10px;
            box-shadow: 0px 0px 2px grey;
        }
    }
</style>