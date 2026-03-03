import { api } from "../api"
import type { Card } from "../types/card-type"

export type GetCardsResponse = {
  list: Card[]
  rpp: number
  page: number
  more: boolean
}

export type GetCardsParams = {
  page?: number
  rpp?: number
}

export const getMyCards = async (): Promise<Card[]> => {
  const { data } = await api.get("/me/cards")
  return data
}

export const getCards = async (
  params: GetCardsParams = {}
): Promise<GetCardsResponse> => {
  const { page = 1, rpp = 20 } = params

  const { data } = await api.get<GetCardsResponse>("/cards", {
    params: {
      page,
      rpp,
    },
  })

  return data
}
