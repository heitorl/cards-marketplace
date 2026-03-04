import { Layers } from "lucide-react"
import { SectionHeader } from "./section-header"
import { CardItem } from "./card-item"
import { useMyCards } from "../../hooks/use-cards"
import { useTradeStore } from "../../store/trade-store"
import toast from "react-hot-toast"
import type { TabType } from "../../pages/dashboard"

type MyCollectionProps = {
  setActiveTab: (tab: TabType) => void
}

export const MyCollection = ({ setActiveTab }: MyCollectionProps) => {
  const { data: cards, isLoading } = useMyCards()
  const setOfferedCard = useTradeStore((s) => s.setOfferedCard)
  return (
    <div className="flex flex-col gap-2 pt-4">
      <SectionHeader
        icon={Layers}
        title="Minha Coleção"
        description="Visualize e gerencie suas cartas"
      />
      {/* <div className="flex flex-col w-60 sm:flex-row gap-2 pt-2 sm:w-full sm:max-w-md">
        <Button className="flex gap-2 w-full">
          <PlusIcon />
          Adicionar Carta
        </Button>
        <Button
          className="flex gap-2 w-full"
          variant="secondary"
          disabled={!offeredCard}
          onClick={handleOfferTrade}
        >
          <Repeat />
          Oferecer para troca
        </Button>
      </div> */}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-4">
        {isLoading && <span>Carregando cartas...</span>}

        {cards?.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            onAction={() => {
              setOfferedCard(card)
              toast.success("Sua carta foi ofertada para uma troca")
              setActiveTab("trade")
            }}
            actionLabel="Oferecer para troca"
          />
        ))}
      </div>
    </div>
  )
}
