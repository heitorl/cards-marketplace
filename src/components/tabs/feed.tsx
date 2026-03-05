import { LoaderCircle, Radio, Repeat, User } from "lucide-react"
import { SectionHeader } from "./section-header"
import { Button } from "../Button"
import { useTrades } from "../../hooks/use-trades"
import { FeedCard } from "./feed-card"
import { useMyCards } from "../../hooks/use-cards"
import { useConfirmTrade } from "../../hooks/use-confirm-trade"
import { useState } from "react"
import { useAuthStore } from "../../store/auth-store"

export const Feed = () => {
  const { data, isLoading } = useTrades()
  const { data: myCards = [] } = useMyCards()
  const { mutateAsync: confirmTrade } = useConfirmTrade()
  const userId = useAuthStore((state) => state.user?.id)
  const [filter, setFilter] = useState<"market" | "mine">("market")

  const filteredTrades = data?.list?.filter((trade) => {
    if (!userId) return false

    if (filter === "mine") {
      return trade.userId === userId
    }

    return trade.userId !== userId
  })

  const userCardsIds = new Set(myCards.map((c) => c.id))
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <LoaderCircle className="animate-spin text-primary" size={48} />
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-2 pt-4">
      <SectionHeader
        icon={Radio}
        title="Feed de Trocas"
        description="Marketplace de trocas aberto - veja todas as propostas publicadas"
      />

      <div className="flex flex-col w-60 sm:flex-row gap-2 pt-2 sm:w-full sm:max-w-md">
        <Button
          variant={filter === "market" ? "primary" : "secondary"}
          onClick={() => setFilter("market")}
        >
          Marketplace
        </Button>

        <Button
          variant={filter === "mine" ? "primary" : "secondary"}
          onClick={() => setFilter("mine")}
        >
          Minhas Trocas
        </Button>
      </div>

      {filteredTrades?.map((trade) => {
        const isOwner = trade.userId === userId
        const offering = trade.tradeCards.filter((tc) => tc.type === "OFFERING")

        const receiving = trade.tradeCards.filter(
          (tc) => tc.type === "RECEIVING"
        )

        const handleConfirm = async () => {
          const cardToReceive = offering.map((item) => item.card.id)
          await confirmTrade(cardToReceive)
        }

        const canTrade = receiving.every((item) =>
          userCardsIds.has(item.card.id)
        )
        return (
          <div key={trade.id} className="w-full bg-card rounded-xl mt-4">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 pt-4">
              <div className="flex justify-center w-full flex-col px-4">
                <div className="flex gap-2 items-center py-2 px-4">
                  <User
                    size={30}
                    className="text-white bg-primary/60 rounded-full p-1"
                  />

                  <div className="flex flex-col">
                    <span className="font-semibold">{trade.user.name}</span>
                    <p className="text-muted-foreground">Proposta de troca</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {offering.map((item) => (
                    <FeedCard
                      key={item.id}
                      name={item.card.name}
                      description={item.card.description}
                      imageUrl={item.card.imageUrl}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-center items-center">
                <Repeat size={60} className="text-primary/60" />
              </div>

              <div className="flex justify-end w-full flex-col px-4">
                <div className="flex flex-col gap-3">
                  {receiving.map((item) => (
                    <FeedCard
                      key={item.id}
                      name={item.card.name}
                      description={item.card.description}
                      imageUrl={item.card.imageUrl}
                    />
                  ))}
                </div>
              </div>
            </div>

            {!isOwner && (
              <div className="w-full px-4 py-4">
                <Button disabled={!canTrade} onClick={handleConfirm}>
                  {canTrade
                    ? "Confirmar troca"
                    : "Você não possui as cartas necessárias"}
                </Button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
