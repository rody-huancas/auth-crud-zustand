import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthLayout } from "../layouts/AuthLayout"
import { LoginPage } from "../pages/LoginPage"

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/auth/login" element={<AuthLayout />}>
                <Route index element={<LoginPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
