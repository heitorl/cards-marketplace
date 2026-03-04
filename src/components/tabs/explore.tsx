import { Compass, Search } from "lucide-react"
import { SectionHeader } from "./section-header"
import { CardItem } from "./card-item"
import { Input } from "../Input"
import { useInfiniteScroll } from "../../hooks/use-infinite-scroll"
import { useState } from "react"
import { useCards } from "../../hooks/use-cards"
import { useTradeStore } from "../../store/trade-store"
import type { TabType } from "../../pages/dashboard"
import toast from "react-hot-toast"

type ExploreProps = {
  setActiveTab: (tab: TabType) => void
}

export const Explore = ({ setActiveTab }: ExploreProps) => {
  const [search, setSearch] = useState("")
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useCards()

  const setDesiredCard = useTradeStore((s) => s.setDesiredCard)

  const cards = data?.pages.flatMap((page) => page.list) ?? []

  const loadMoreRef = useInfiniteScroll(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  })

  return (
    <div className="flex flex-col gap-2 pt-4">
      <SectionHeader
        icon={Compass}
        title="Explorar cartas"
        description="Descubra e adicione cartas á sua coleção"
      />

      <div className="w-full bg-card p-4 rounded-2xl">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={<Search />}
          placeholder="Busque por uma carta"
          className=" bg-transparent border-none"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
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
          <div className="col-span-full text-center py-4">
            Carregando mais cartas...
          </div>
        )}
      </div>
    </div>
  )
}
