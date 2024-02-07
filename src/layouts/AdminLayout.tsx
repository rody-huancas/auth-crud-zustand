import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores";

export const AdminLayout = () => {
  const authStatus = useAuthStore((state) => state.status);

  if (authStatus === "pending") return <div>Cargando...</div>;
  if (authStatus === "unauthorized") return <Navigate to="/auth/login" />;

  return (
    <div>
      <Outlet />
    </div>
  );
};
