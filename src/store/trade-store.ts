import { create } from "zustand"
import type { Card } from "../types/card-type"

type TradeState = {
  offeredCard: Card | null
  desiredCard: Card | null

  setOfferedCard: (card: Card | null) => void
  setDesiredCard: (card: Card | null) => void

  clearTrade: () => void
}

export const useTradeStore = create<TradeState>((set) => ({
  offeredCard: null,
  desiredCard: null,

  setOfferedCard: (card) =>
    set({
      offeredCard: card,
    }),

  setDesiredCard: (card) =>
    set({
      desiredCard: card,
    }),

  clearTrade: () =>
    set({
      offeredCard: null,
      desiredCard: null,
    }),
}))
