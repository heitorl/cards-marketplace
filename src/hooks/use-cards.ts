import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import {
  getCards,
  getMyCards,
  type GetCardsResponse,
} from "../services/cards-service"

export const useMyCards = () => {
  return useQuery({
    queryKey: ["my-cards"],
    queryFn: getMyCards,
  })
}

// type Props = {
//   page?: number
//   rpp?: number
// }

export const useCards = (rpp = 20) => {
  return useInfiniteQuery<GetCardsResponse>({
    queryKey: ["cards", rpp],

    queryFn: ({ pageParam }) =>
      getCards({
        page: pageParam as number,
        rpp,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      return lastPage.more ? lastPage.page + 1 : undefined
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}
