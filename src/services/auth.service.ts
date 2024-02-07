import { AxiosError } from "axios";
import { configApi } from "../api/configApi";

export interface LoginResponse {
  _id: string;
  email: string;
  name: string;
  token: string;
}

export class AuthService {
    static login = async(email: string, password: string): Promise<LoginResponse> => {
        try {
            const { data } = await configApi.post<LoginResponse>('/auth/login', {email, password});
            return data;
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data);
                throw new Error(error.response?.data)
            }
            console.log(error);
            throw new Error('No puede iniciar sesión')
        }
    }
}