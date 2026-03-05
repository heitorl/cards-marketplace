import { Navigate, Route, Routes } from "react-router"
import { AuthLayout } from "../layouts/auth-layout"
import Login from "../pages/login"
import Register from "../pages/register"
import { ProtectedRoutes, PublicRoutes } from "./route"
import Dashboard from "../pages/dashboard"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route element={<PublicRoutes />}>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
