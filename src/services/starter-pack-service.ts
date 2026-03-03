import { api } from "../api"
import { pickRandom } from "../utils/pickRandom"
import { getCards, getMyCards } from "./cards-service"

export const giveStarterPack = async () => {
  try {
    const myCards = await getMyCards()

    if (myCards.length > 0) return false

    const cardsResponse = await getCards({
      page: 1,
      rpp: 50,
    })

    if (!cardsResponse.list.length) return false

    const starterCards = pickRandom(cardsResponse.list, 3)

    await api.post("/me/cards", {
      cardIds: starterCards.map((c) => c.id),
    })

    return true
  } catch (error) {
    console.error("Starter pack error:", error)
    return false
  }
}
