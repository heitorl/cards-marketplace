import { Layers, PlusIcon, Repeat } from "lucide-react"
import { Button } from "../Button"
import { SectionHeader } from "./section-header"
import { useCards } from "../../hooks/use-cards"
import { CardItem } from "./card-item"

export const MyCollection = () => {
  const { data: cards, isLoading } = useCards()

  return (
    <div className="flex flex-col gap-2 pt-4">
      <SectionHeader
        icon={Layers}
        title="Minha Coleção"
        description="Visualize e gerencie suas cartas"
      />
      <div className="flex flex-col w-60 sm:flex-row gap-2 pt-2 sm:w-full sm:max-w-md">
        <Button className="flex gap-2 w-full">
          <PlusIcon />
          Adicionar Carta
        </Button>
        <Button className="flex gap-2 w-full" variant="secondary">
          <Repeat />
          Oferecer para troca
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-4">
        {isLoading && <span>Carregando cartas...</span>}

        {cards?.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
