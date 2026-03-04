import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuthStore } from "../store/auth-store"
import type { LoginRequestData, LoginResponse } from "../types/auth-types"
import { api } from "../api"
import { useNavigate } from "react-router"
import toast from "react-hot-toast"
import type { AxiosError } from "axios"
import { useStarterPack } from "./use-starter-pack"
import { getStarterKey } from "../utils/get-start-key"

type ApiError = {
  statusCode: number
  error: string
  message: string
}

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth)
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { executeStarterPack } = useStarterPack()

  return useMutation<LoginResponse, AxiosError<ApiError>, LoginRequestData>({
    mutationFn: async (data) => {
      const response = await api.post<LoginResponse>("/login", data)
      return response.data
    },

    onSuccess: async (data) => {
      api.defaults.headers.common.Authorization = `Bearer ${data.token}`
      setAuth(data.user, data.token)
      const receivedStarter = await executeStarterPack()

      const key = getStarterKey(data.user.id)

      await queryClient.invalidateQueries({
        queryKey: ["my-cards"],
      })
      const alreadySeen = localStorage.getItem(key)

      if (receivedStarter && !alreadySeen) {
        localStorage.setItem(key, "true")
        window.dispatchEvent(new Event("starter-pack-received"))
      }

      toast.success("Login realizado com sucesso 🎉")

      navigate("/dashboard", { replace: true })
    },

    onError: (error) => {
      const message =
        error?.response?.data?.message || "Email ou senha inválidos"

      toast.error(message)
    },
  })
}
