import axios from "axios";
import { useAuthStore } from "../stores";

export const configApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});

// interceptor
configApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
