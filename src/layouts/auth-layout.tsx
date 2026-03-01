import { Outlet } from "react-router"
import { AuthContainer } from "../components/AuthContainer"

export function AuthLayout() {
  return (
    <div className="flex justify-center items-center">
      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </div>
  )
}
