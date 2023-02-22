import { v4 as uuidv4 } from 'uuid'

export function crud(store) {

    async function all() {
        return new Promise((resolve, reject) => {
            store.subscribe((v) => { resolve(v) });
        })
    }

    async function search(filter) {
        const _all = await all(); 
        return _all.filter(filter);
    }

    async function read(id) {
        const _item = await search((item) => item.id == id);
        return _item[0]; 
    }

    async function first(filter) {
        const _items = await search(filter); 
        if(_items.length == 0) 
            return null;
        else 
            return _items[0];   
    }

    async function remove(filter) {
        let _filtered = await search(filter); 
        let _items = await all();
        let _ids = _filtered.map(x => x.id);
        _items = _items.filter(item => _ids.indexOf(item.id) == -1) 
        console.log(_items)
        store.set(_items);
    }

    async function patch(filter, patchFn) {
        let _filtered = await search(filter); 
        let _items = await all();
        let _ids = _filtered.map(x => x.id);
        for(let _item of _items) {
            if(_ids.indexOf(_item.id) == -1) continue; 
            patchFn(_item);
        }
        store.set(_items);
    }

    async function create(data) {
        const item = {
            id: uuidv4(), 
            ...data
        }
        const items = await all(); 
        items.push(item);
        store.set(items);
    }

    return {
        ...store,
        all,
        search,  
        read, 
        first,
        remove,
        patch,
        create
    }
}