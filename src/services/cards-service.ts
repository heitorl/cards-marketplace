import { api } from "../api"
import type { Card } from "../types/card-type"

export async function getMyCards(): Promise<Card[]> {
  const { data } = await api.get("/me/cards")
  return data
}
