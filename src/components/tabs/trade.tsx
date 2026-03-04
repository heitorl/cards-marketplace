import { ArrowRightLeft } from "lucide-react"
import { SectionHeader } from "./section-header"
import { StepProgress } from "./step-progress"
import { useTradeStore } from "../../store/trade-store"
import { CardItem } from "./card-item"
import { Button } from "../Button"

const steps = [
  { id: 1, label: "Oferecer" },
  { id: 2, label: "Receber" },
  { id: 3, label: "Confirmar" },
]

export const Trade = () => {
  const offeredCard = useTradeStore((s) => s.offeredCard)
  const desiredCard = useTradeStore((s) => s.desiredCard)

  const canTrade = offeredCard && desiredCard

  const currentStep = (() => {
    if (!offeredCard) return 1
    if (offeredCard && !desiredCard) return 2
    return 3
  })()

  return (
    <div className="flex flex-col gap-2 pt-4">
      <SectionHeader
        icon={ArrowRightLeft}
        title="Criar Troca"
        description="Selecione as cartas para criar uma proposta de troca"
      />

      <StepProgress steps={steps} currentStep={currentStep} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <div className="bg-card rounded-xl p-4">
          <h3 className="mb-4 font-semibold">Sua carta</h3>

          {offeredCard ? (
            <CardItem card={offeredCard} />
          ) : (
            <p className="text-muted-foreground">
              Escolha uma carta da sua coleção
            </p>
          )}
        </div>

        <div className="bg-card rounded-xl p-4">
          <h3 className="mb-4 font-semibold">Carta desejada</h3>

          {desiredCard ? (
            <CardItem card={desiredCard} />
          ) : (
            <p className="text-muted-foreground">
              Escolha uma carta no explorar
            </p>
          )}
        </div>

        <div className="md:col-span-2 flex justify-center">
          <Button disabled={!canTrade}>Confirmar troca</Button>
        </div>
      </div>
    </div>
  )
}
