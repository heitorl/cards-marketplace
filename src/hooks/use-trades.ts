import { useQuery } from "@tanstack/react-query"
import { getTrades } from "../services/trade-service"

export const useTrades = (page = 1) => {
  return useQuery({
    queryKey: ["trades", page],
    queryFn: () => getTrades(page),
  })
}
