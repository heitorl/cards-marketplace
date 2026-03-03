import { ArrowRightLeft } from "lucide-react"
import { SectionHeader } from "./section-header"
import { StepProgress } from "./step-progress"

const steps = [
  { id: 1, label: "Oferecer" },
  { id: 2, label: "Receber" },
  { id: 3, label: "Confirmar" },
]

export const Trade = () => {
  return (
    <div className="flex flex-col gap-2 pt-4">
      <SectionHeader
        icon={ArrowRightLeft}
        title="Criar Troca"
        description="Selecione as cartas para criar uma proposta de troca"
      />

      <StepProgress steps={steps} currentStep={1} />
    </div>
  )
}
