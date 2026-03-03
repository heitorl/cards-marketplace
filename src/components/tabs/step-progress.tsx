type Step = {
  id: number
  label: string
}

type Props = {
  steps: Step[]
  currentStep: number
}

export const StepProgress = ({ steps, currentStep }: Props) => {
  return (
    <div className="w-full bg-card rounded-2xl px-10 py-6">
      <div className="flex items-center w-full">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep
          const isCompleted = step.id < currentStep

          return (
            <div
              key={step.id}
              className="flex items-center flex-1 last:flex-none"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    font-semibold text-sm transition-all
                    ${
                      isActive
                        ? "bg-button-gradient text-white"
                        : isCompleted
                          ? "bg-primary text-white"
                          : "bg-input-background text-muted-foreground"
                    }
                  `}
                >
                  {step.id}
                </div>

                <span
                  className={`mt-2 text-sm whitespace-nowrap ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-6 bg-input-background" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
