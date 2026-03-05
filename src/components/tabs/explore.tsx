import { Compass, LoaderCircle } from "lucide-react"
import { SectionHeader } from "./section-header"
import { CardItem } from "./card-item"
import { useInfiniteScroll } from "../../hooks/use-infinite-scroll"
import { useCards } from "../../hooks/use-cards"
import { useTradeStore } from "../../store/trade-store"
import type { TabType } from "../../pages/dashboard"
import toast from "react-hot-toast"

type ExploreProps = {
  setActiveTab: (tab: TabType) => void
}

export const Explore = ({ setActiveTab }: ExploreProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useCards()

  const setDesiredCard = useTradeStore((s) => s.setDesiredCard)

  const cards = data?.pages.flatMap((page) => page.list) ?? []

  const loadMoreRef = useInfiniteScroll(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  })

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
        icon={Compass}
        title="Explorar cartas"
        description="Descubra e adicione cartas á sua coleção"
      />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 pt-4">
        {cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            onAction={() => {
              setDesiredCard(card)
              toast.success("Carta desejada selecionada")
              setActiveTab("trade")
            }}
            actionLabel="Pedir troca"
          />
        ))}
      </div>
      <div ref={loadMoreRef} className="h-10 flex items-center justify-center">
        {isFetchingNextPage && (
          <LoaderCircle className="animate-spin text-primary" size={28} />
        )}
      </div>
    </div>
  )
}
