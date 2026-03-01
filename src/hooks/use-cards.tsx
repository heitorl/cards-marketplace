import { useQuery } from "@tanstack/react-query"
import { getMyCards } from "../services/cards-service"

export const useCards = () => {
  return useQuery({
    queryKey: ["my-cards"],
    queryFn: getMyCards,
  })
}
