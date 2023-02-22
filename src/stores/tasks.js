import { writable } from 'svelte/store' 
import { crud } from '@/helpers/crud' 
import { onClient } from '../helpers/on-client';
import { persist, createLocalStorage } from '@macfja/svelte-persistent-store'


function createTasks() {
    /**
     * Set-up Store
     */
    const _name = "tasks";
    const _default = [
        { id: 1, description: "Task A", isDone: false }, 
        { id: 2, description: "Task B", isDone: false }, 
        { id: 3, description: "Task C", isDone: true}
    ];
    const _storage = createLocalStorage();
    const _store = writable(_default); 

    /**
     * Create Store
     */
    let store = persist(_store, _storage, _name);
    
    return { ...crud(store) };
}

export let tasks = null;

onClient(() => {
    tasks = createTasks();
});