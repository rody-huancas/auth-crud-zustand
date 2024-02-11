import { StateCreator, create } from "zustand";
import { devtools } from 'zustand/middleware';
import { ItemResponse } from "../../interfaces";
import { ItemService } from "../../services/item.service";
import { toast } from "sonner";


export interface ItemState {
    items: ItemResponse[],
    item?: ItemResponse,
    getAllItems: () => void;
    getItem: (id: string) => void;
    cretateItem: (item: ItemResponse) => void;
    deleteItem: (id: string) => void;
    updateItem: (id: string | undefined, item: ItemResponse) => void;
}


const storeApi: StateCreator<ItemState> = (set) =>({
    items: [],
    item: undefined,
    getAllItems: async() => {
        try {
            const res = await ItemService.getAllItems();
            let itemsArray = Array.isArray(res) ? res : [res];
            set({ items: itemsArray }); 
        } catch (error) {
            throw new Error("Error al obtener los items");
        }        
    },
    getItem: async(id: string) => {
        try {
            const res = await ItemService.getItem(id);
            set({ item: res }); 
        } catch (error) {
            throw new Error("Error al obtener el item");
        }
    },
    cretateItem: async(item: ItemResponse) => {
        try {
            const res = await ItemService.createItem(item);
            let itemsArray = Array.isArray(res)? res : [res];
            set({ items: itemsArray }); 
            toast.success("Item creado correctamente")
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
    },
    updateItem: async(id: string | undefined, item: ItemResponse) => {
        try {
            const res = await ItemService.updateItem(id, item);
            set({ item: res }); 
            toast.success("Item actualizado correctamente")
        } catch (error) {
            throw new Error("Error al obtener el item");
        }
    }
});

export const useItemStore  = create<ItemState>()(
    devtools(
        storeApi
    )
)

