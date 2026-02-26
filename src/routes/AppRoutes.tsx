import { Navigate, Route, Routes } from "react-router"
import { AuthLayout } from "../layouts/AuthLayout"
import Login from "../pages/Login"
import Register from "../pages/Register"

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
