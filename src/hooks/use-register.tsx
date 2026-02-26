import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useNavigate } from "react-router"
import toast from "react-hot-toast"

import { api } from "../api"

type RegisterRequestData = {
  name: string
  email: string
  password: string
}

type RegisterResponse = {
  userId: string
}

type ApiError = {
  statusCode: number
  message: string
  error: string
}

export const useRegister = () => {
  const navigate = useNavigate()

  return useMutation<
    RegisterResponse,
    AxiosError<ApiError>,
    RegisterRequestData
  >({
    mutationFn: async (data) => {
      const response = await api.post<RegisterResponse>("/register", data)

      return response.data
    },

    onSuccess: () => {
      toast.success("Conta criada com sucesso")

      navigate("/login", { replace: true })
    },

    onError: (error) => {
      const message = error.response?.data?.message || "Erro ao criar conta"

      toast.error(message)
    },
  })
}
