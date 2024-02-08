import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { AdminLayout } from "../layouts/AdminLayout";
import { NewProduct } from "../pages/NewProduct";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route>

        <Route path="/" element={<AdminLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/new-product" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
