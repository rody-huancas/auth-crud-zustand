import axios from "axios";
import { useAuthStore } from "../stores";

export const configApi = axios.create({
  baseURL: "http://localhost:3001",
});

// interceptor
configApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
