import { Navigate, Outlet } from "react-router"
import { useAuthStore } from "../store/auth-store"

export const ProtectedRoutes = () => {
  const token = useAuthStore((state) => state.token)

  return token ? <Outlet /> : <Navigate to="/login" replace />
}

export const PublicRoutes = () => {
  const token = useAuthStore((state) => state.token)

  return !token ? <Outlet /> : <Navigate to="/dashboard" replace />
}
