import { useMutation, useQueryClient } from "@tanstack/react-query"
import { confirmTrade } from "../services/trade-service"
import toast from "react-hot-toast"

export const useConfirmTrade = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: confirmTrade,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["my-cards"],
      })

      await queryClient.invalidateQueries({
        queryKey: ["trades"],
      })

      toast.success("Troca realizada com sucesso ")
    },

    onError: () => {
      toast.error("Erro ao confirmar troca")
    },
  })
}
