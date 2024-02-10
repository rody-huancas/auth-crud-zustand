import { StateCreator, create } from "zustand";
import { AuthStatus, RegisterUser, User } from "../../interfaces";
import { devtools, persist } from "zustand/middleware";
import { AuthService } from "../../services/auth.service";
import { toast } from "sonner";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => void;
  registerUser: (data: RegisterUser) => Promise<void>;
}

const storeApi: StateCreator<AuthState> = (set) => ({
  status: "unauthorized",
  token: undefined,
  user: undefined,
  loginUser: async (email: string, password: string) => {
    try {
      const { token, ...user } = await AuthService.login(email, password);
      set({ status: "authorized", token, user });
    } catch (error) {
      set({ status: "unauthorized", token: undefined, user: undefined });
      toast.error("Credenciales incorrectas");
    }
  },
  logoutUser: () => {
    set({ status: "unauthorized", token: undefined, user: undefined });
  },
  registerUser: async (data: RegisterUser) => {
    try {
        await AuthService.registerUser(data);
    } catch (error) {
        throw new Error(`${error}`);
    }
  }
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
        storeApi, { name: "auth-storage" }
    ))
);
