import { Sparkles } from "lucide-react"
import { Button } from "./Button"

type Props = {
  open: boolean
  onClose: () => void
}

export const WelcomeStarterModal = ({ open, onClose }: Props) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-card rounded-2xl p-6 w-[90%] max-w-md text-center space-y-4 animate-in fade-in zoom-in-95">
        <div className="flex justify-center">
          <Sparkles size={40} className="text-primary drop-shadow-primary" />
        </div>

        <h2 className="text-2xl font-semibold">
          Bem-vindo ao Cards Marketplace 🎉
        </h2>

        <p className="text-muted-foreground">
          Você recebeu um <strong>Starter Pack</strong> com 3 cartas aleatórias
          para começar sua coleção!
        </p>

        <Button className="w-full" onClick={onClose}>
          Começar coleção
        </Button>
      </div>
    </div>
  )
}
