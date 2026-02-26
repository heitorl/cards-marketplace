import { Sparkles } from "lucide-react"

export const AuthLogo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Sparkles
        size={38}
        className="text-primary drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]"
      />
      <h1 className="text-4xl text-gradient font-semibold">
        Cards Marketplace
      </h1>
    </div>
  )
}
