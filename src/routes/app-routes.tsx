import { Navigate, Route, Routes } from "react-router"
import { AuthLayout } from "../layouts/auth-layout"
import Login from "../pages/login"
import Register from "../pages/register"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}
