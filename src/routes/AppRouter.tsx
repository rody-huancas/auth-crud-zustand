import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { AdminLayout } from "../layouts/AdminLayout";
import { NewProduct } from "../pages/NewProduct";
import { RegisterUser } from "../pages/RegisterUser";
import { EditProduct } from "../pages/EditProduct";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterUser />} />
        </Route>

        <Route path="/" element={<AdminLayout />}>
          <Route index element={<HomePage />} />
          <Route path="new-product" element={<NewProduct />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
