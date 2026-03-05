import { Outlet } from "react-router"
import { AuthContainer } from "../components/AuthContainer"

export function AuthLayout() {
  return (
    <div className="flex justify-center items-center h-full px-2.5">
      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </div>
  )
}
