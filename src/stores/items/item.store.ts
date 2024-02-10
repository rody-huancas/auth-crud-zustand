import { StateCreator, create } from "zustand";
import { devtools } from 'zustand/middleware';
import { ItemResponse } from "../../interfaces";
import { ItemService } from "../../services/item.service";
import { toast } from "sonner";


export interface ItemState {
    items: ItemResponse[],
    getAllItems: () => void;
    cretateItem: (item: ItemResponse) => void;
    deleteItem: (id: string) => void;
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
    },
    deleteItem: async(id: string) => {
        try {
            await ItemService.deleteItem(id);
            set((state: ItemState) => ({ items: state.items.filter(item => item._id !== id) }));
            toast.success("Item eliminado correctamente")
        } catch (error) {
            throw new Error("Error al eliminar el item");
        }
    }
});

export const useItemStore  = create<ItemState>()(
    devtools(
        storeApi
    )
)

