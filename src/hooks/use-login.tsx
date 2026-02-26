import { useMutation } from "@tanstack/react-query"
import { useAuthStore } from "../store/auth-store"
import type { LoginRequestData, LoginResponse } from "../types/auth-types"
import { api } from "../api"

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth)

  return useMutation<LoginResponse, Error, LoginRequestData>({
    mutationFn: async (data) => {
      const response = await api.post<LoginResponse>("/login", data)
      return response.data
    },

    onSuccess: (data) => {
      setAuth(data.user, data.token)
    },
  })
}
