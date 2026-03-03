import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import toast from "react-hot-toast"
import { useAuthStore } from "../store/auth-store"

export const useLogout = () => {
  const signOut = useAuthStore((state) => state.signOut)
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const logout = async () => {
    signOut()

    await queryClient.clear()

    toast.success("Logout realizado")

    navigate("/login", { replace: true })
  }

  return { logout }
}
