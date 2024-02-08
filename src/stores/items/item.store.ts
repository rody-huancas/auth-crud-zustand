import { StateCreator, create } from "zustand";
import { devtools } from 'zustand/middleware';
import { ItemResponse } from "../../interfaces";
import { ItemService } from "../../services/item.service";


export interface ItemState {
    items: ItemResponse[],
    getAllItems: () => void;
    cretateItem: (item: ItemResponse) => void;
}

const storeApi: StateCreator<ItemState> = (set) =>({
    items: [],
    getAllItems: async() => {
        try {
            const res = await ItemService.getAllItems();
            let itemsArray = Array.isArray(res) ? res : [res];
            set({ items: itemsArray }); 
        } catch (error) {
            throw new Error("Error al obtener los items");
        }        
    },
    cretateItem: async(item: ItemResponse) => {
        try {
            const res = await ItemService.createItem(item);
            let itemsArray = Array.isArray(res)? res : [res];
            set({ items: itemsArray }); 
        } catch (error) {
            throw new Error("Error al crear el item");
        }
    }
});

export const useItemStore  = create<ItemState>()(
    devtools(
        storeApi
    )
)

