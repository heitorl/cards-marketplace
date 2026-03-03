import { Outlet } from "react-router"
import { AuthContainer } from "../components/AuthContainer"

export function AuthLayout() {
  return (
    <div className="flex justify-center items-center h-full">
      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </div>
  )
}
