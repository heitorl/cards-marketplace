type FeedCardProps = {
  name: string
  description: string
  imageUrl: string
}

export const FeedCard = ({ name, description, imageUrl }: FeedCardProps) => {
  return (
    <div
      className="
                w-full
                bg-card/70
                rounded-xl
                p-4
                flex
                gap-4
                shadow-lg
                border
              "
    >
      {/* imagem */}
      <div className="w-28 h-36 shrink-0 rounded-lg overflow-hidden bg-muted">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* conteúdo */}
      <div className="flex flex-col min-w-0">
        <h3 className="font-semibold text-lg leading-tight line-clamp-1">
          {name}
        </h3>

        <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  )
}
