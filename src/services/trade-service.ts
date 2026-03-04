import { api } from "../api"

type CreateTradePayload = {
  offeredCardId: string
  desiredCardId: string
}

export type TradeCard = {
  id: string
  cardId: string
  tradeId: string
  type: "OFFERING" | "RECEIVING"
  card: {
    id: string
    name: string
    description: string
    imageUrl: string
    createdAt: string
  }
}

export type Trade = {
  id: string
  userId: string
  createdAt: string
  user: {
    name: string
  }
  tradeCards: TradeCard[]
}

type GetTradesResponse = {
  list: Trade[]
  rpp: number
  page: number
  more: boolean
}

export const createTrade = async ({
  offeredCardId,
  desiredCardId,
}: CreateTradePayload) => {
  const response = await api.post("/trades", {
    cards: [
      {
        cardId: offeredCardId,
        type: "OFFERING",
      },
      {
        cardId: desiredCardId,
        type: "RECEIVING",
      },
    ],
  })

  return response.data
}

export const getTrades = async (
  page = 1,
  rpp = 10
): Promise<GetTradesResponse> => {
  const { data } = await api.get("/trades", {
    params: { page, rpp },
  })

  return data
}

export const confirmTrade = async (cardIds: string[]) => {
  await api.post("/me/cards", {
    cardIds,
  })
}
