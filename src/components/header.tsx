import { LogOut, Sparkles } from "lucide-react"
import { Button } from "./Button"

export const Header = () => {
  return (
    <div className="w-full bg-card px-4 sm:px-6 md:px-12 lg:px-24 xl:px-42 py-4 sm:py-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Sparkles
            size={32}
            className="text-primary drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]"
          />
          <h1 className="text-lg sm:text-2xl lg:text-3xl text-gradient font-semibold whitespace-nowrap">
            Cards Marketplace
          </h1>
        </div>

        <div>
          <Button variant="secondary">
            <LogOut size={20} />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
