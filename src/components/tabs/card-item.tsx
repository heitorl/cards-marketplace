import type { Card } from "../../types/card-type"
import { Button } from "../Button"

type Props = {
  card: Card
  selected?: boolean
  onAction?: () => void
  actionLabel?: string
}

export const CardItem = ({ card, selected, onAction, actionLabel }: Props) => {
  return (
    <div
      className={`
        bg-card rounded-xl p-3 w-full sm:w-62 cursor-pointer
        transition-all duration-200 border
        ${
          selected
            ? "border-primary border-2 ring-1 ring-primary scale-[1.02]"
            : "border-border hover:border-primary/40"
        }
      `}
    >
      <img
        src={card.imageUrl}
        alt={card.name}
        className="w-full h-56 object-cover rounded-md"
      />

      <h3 className="mt-2 font-semibold line-clamp-1">{card.name}</h3>

      <p className="text-sm text-muted-foreground line-clamp-2">
        {card.description}
      </p>

      {onAction && (
        <div className="mt-3">
          <Button onClick={onAction} variant="card">
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  )
}
