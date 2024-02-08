import { AxiosError } from "axios";
import { configApi } from "../api/configApi";
import { ItemResponse } from "../interfaces";

export class ItemService {
  static getAllItems = async (): Promise<ItemResponse> => {
    try {
      const { data } = await configApi.get<ItemResponse>("/item");      
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }
      console.log(error);
      throw new Error("Error al listar los items");
    }
  };
  
  static createItem = async(item: ItemResponse): Promise<ItemResponse> => {
    try {
      const { data } = await configApi.post<ItemResponse>("/item", item);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }
      console.log(error);
      throw new Error("Error al crear el item");
    }
  }
}
