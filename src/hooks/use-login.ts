import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuthStore } from "../store/auth-store"
import type { LoginRequestData, LoginResponse } from "../types/auth-types"
import { api } from "../api"
import { useNavigate } from "react-router"
import toast from "react-hot-toast"
import type { AxiosError } from "axios"

type ApiError = {
  statusCode: number
  error: string
  message: string
}

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation<LoginResponse, AxiosError<ApiError>, LoginRequestData>({
    mutationFn: async (data) => {
      const response = await api.post<LoginResponse>("/login", data)
      return response.data
    },

    onSuccess: async (data) => {
      setAuth(data.user, data.token)

      await queryClient.invalidateQueries({
        queryKey: ["my-cards"],
      })

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
