import { Crosshair, Gem, Repeat, TextSelectIcon } from "lucide-react"
import { SectionHeader } from "./section-header"
import { StepProgress } from "./step-progress"
import { useTradeStore } from "../../store/trade-store"
import { CardItem } from "./card-item"
import { Button } from "../Button"
import type { TabType } from "../../pages/dashboard"
import { useCreateTrade } from "../../hooks/use-create-trade"
import toast from "react-hot-toast"

type TradeProps = {
  setActiveTab: (tab: TabType) => void
}

const steps = [
  { id: 1, label: "Oferecer" },
  { id: 2, label: "Receber" },
  { id: 3, label: "Confirmar" },
]

export const Trade = ({ setActiveTab }: TradeProps) => {
  const offeredCard = useTradeStore((s) => s.offeredCard)
  const desiredCard = useTradeStore((s) => s.desiredCard)

  const canTrade = offeredCard && desiredCard

  const currentStep = (() => {
    if (!offeredCard) return 1
    if (offeredCard && !desiredCard) return 2
    return 3
  })()

  const { mutateAsync, isPending } = useCreateTrade()

  const resetTrade = useTradeStore((s) => s.clearTrade)

  const handleConfirmTrade = async () => {
    if (!offeredCard || !desiredCard) return

    try {
      await mutateAsync({
        offeredCardId: offeredCard.id,
        desiredCardId: desiredCard.id,
      })

      toast.success("Proposta de troca enviada com sucesso 🤝")

      resetTrade()
      setActiveTab("feed")
    } catch (error) {
      console.log(error)
      toast.error("Erro ao criar troca")
    }
  }

  return (
    <div className="flex flex-col gap-2 pt-4">
      <SectionHeader
        icon={Repeat}
        title="Criar Troca"
        description="Selecione as cartas para criar uma proposta de troca"
      />

      <StepProgress steps={steps} currentStep={currentStep} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        <div className="bg-card rounded-xl p-4 flex flex-col">
          <div className="flex gap-1.5">
            <Gem size={18} className="text-primary mt-1" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">Sua carta</h3>
              <p className="text-muted-foreground">
                Escolha uma carta da sua coleção
              </p>
            </div>
          </div>

          {offeredCard ? (
            <div className="w-full flex justify-center">
              <div className="max-w-65">
                <CardItem card={offeredCard} />
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-center items-center p-4 h-full">
                <TextSelectIcon
                  size={52}
                  className="text-primary cursor-pointer"
                  onClick={() => setActiveTab("collection")}
                />
              </div>
            </>
          )}
        </div>

        <div className="w-full flex justify-center items-center">
          <Repeat size={60} className="text-primary/60" />
        </div>
        <div className="bg-card rounded-xl p-4 flex flex-col">
          <div className="flex gap-1.5 items-start mb-4">
            <Crosshair size={18} className="text-primary mt-1" />
            <div className="flex flex-col">
              <h3 className=" font-semibold text-lg">Carta desejada</h3>
              <p className="text-muted-foreground mt-0">
                Escolha uma carta no explorar
              </p>
            </div>
          </div>

          {desiredCard ? (
            <div className="w-full flex justify-center">
              <div className="max-w-65">
                <CardItem card={desiredCard} />
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-center items-center p-4 h-full">
                <TextSelectIcon
                  size={52}
                  className="text-primary cursor-pointer"
                  onClick={() => setActiveTab("explore")}
                />
              </div>
            </>
          )}
        </div>

        <div className="md:col-span-3 flex justify-center w-full">
          <Button
            disabled={!canTrade}
            isLoading={isPending}
            onClick={handleConfirmTrade}
          >
            Solicitar troca
          </Button>
        </div>
      </div>
    </div>
  )
}
