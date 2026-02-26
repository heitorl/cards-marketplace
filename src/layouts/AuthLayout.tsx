import { Outlet } from "react-router"
import { AuthContainer } from "../components/AuthContainer"

export function AuthLayout() {
  return (
    <AuthContainer>
      <Outlet />
    </AuthContainer>
  )
}
