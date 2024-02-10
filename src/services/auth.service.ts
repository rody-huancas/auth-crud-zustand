import { AxiosError } from "axios";
import { configApi } from "../api/configApi";
import { LoginResponse, RegisterUser } from "../interfaces";

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

    static registerUser = async(dataUser: RegisterUser): Promise<RegisterUser> => {
        try {
            const { data } = await configApi.post<RegisterUser>('/auth/register', dataUser);
            return data;
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data);
                throw new Error(error.response?.data)
            }
            console.log(error);
            throw new Error('No puede registrar al usuario')
        }
    }
}