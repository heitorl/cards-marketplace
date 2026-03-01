import type { Card } from "../../types/card-type"

type Props = {
  card: Card
}

export const CardItem = ({ card }: Props) => {
  return (
    <div className="bg-card rounded-xl border p-3 w-full sm:w-55">
      <img
        src={card.imageUrl}
        alt={card.name}
        className="w-full h-56 object-cover rounded-md"
      />

      <h3 className="mt-2 font-semibold line-clamp-1">{card.name}</h3>

      <p className="text-sm text-muted-foreground line-clamp-2">
        {card.description}
      </p>
    </div>
  )
}
