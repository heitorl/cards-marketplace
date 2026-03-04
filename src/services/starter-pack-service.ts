import { api } from "../api"
import { pickRandom } from "../utils/pickRandom"
import { getCards, getMyCards } from "./cards-service"

let starterPackRunning = false

export const giveStarterPack = async () => {
  if (starterPackRunning) return false

  starterPackRunning = true

  try {
    const myCards = await getMyCards()

    if (myCards.length > 0) return false

    const cardsResponse = await getCards({
      page: 1,
      rpp: 80,
    })

    const starterCards = pickRandom(cardsResponse.list, 10)

    await api.post("/me/cards", {
      cardIds: starterCards.map((c) => c.id),
    })

    return true
  } finally {
    starterPackRunning = false
  }
}
