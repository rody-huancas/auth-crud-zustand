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

  static getItem = async (id: string | undefined): Promise<ItemResponse> => {
    try {
      const { data } = await configApi.get<ItemResponse>(`/item/${id}`);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }
      console.log(error);
      throw new Error("Error al obtener el item");
    }
  };

  static createItem = async (item: ItemResponse): Promise<ItemResponse> => {
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
  };

  static deleteItem = async (id: string) => {
    try {
      const { data } = await configApi.delete(`/item/${id}`);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }
      console.log(error);
      throw new Error("Error al eliminar el item");
    }
  };

  static updateItem = async (id: string | undefined, item: ItemResponse): Promise<ItemResponse> => {
    try {
      const { data } = await configApi.put<ItemResponse>(`/item/${id}`, item);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }
      console.log(error);
      throw new Error("Error al actualizar el item");
    }
  };
}
