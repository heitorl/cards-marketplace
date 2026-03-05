import { Layers, LoaderCircle } from "lucide-react"
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
        icon={Layers}
        title="Minha Coleção"
        description="Visualize e gerencie suas cartas"
      />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
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
