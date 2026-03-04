import { useMutation } from "@tanstack/react-query"
import { createTrade } from "../services/trade-service"

export const useCreateTrade = () => {
  return useMutation({
    mutationFn: createTrade,
  })
}
