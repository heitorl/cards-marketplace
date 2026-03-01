import type { LucideIcon } from "lucide-react"

type Props = {
  title: string
  description: string
  icon: LucideIcon
}

export const SectionHeader = ({ title, description, icon: Icon }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Icon size={30} className="text-primary shrink-0" />

        <h1 className="text-2xl sm:text-3xl ">{title}</h1>
      </div>

      <span className="text-sm sm:text-base text-muted-foreground">
        {description}
      </span>
    </div>
  )
}
