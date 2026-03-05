import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTrade } from "../services/trade-service"

export const useDeleteTrade = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteTrade,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trades"] })
    },
  })
}
