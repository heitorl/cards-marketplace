import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react"

type InputVariant = "default" | "error"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  variant?: InputVariant
  errorMessage?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      variant = "default",
      errorMessage,
      leftIcon,
      rightIcon,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      w-full
      rounded-md
      border
      bg-input-background
      px-4
      py-3
      text-sm
      outline-none
      transition
      disabled:cursor-not-allowed
      disabled:opacity-50`

    const variants = {
      default: `
        border-[#e5e7eb]
        focus:border-primary
        focus:ring-2
        focus:ring-primary/20
      `,
      error: `
        border-semantic-error
        focus:ring-2
        focus:ring-semantic-error/20
      `,
    }

    return (
      <div className="w-full space-y-1">
        {label && (
          <label className="text-sm font-medium text-[#111827]">{label}</label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 text-muted-foreground">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={`
              ${baseStyles}
              ${variants[variant]}
              ${leftIcon ? "pl-10" : ""}
              ${rightIcon ? "pr-10" : ""}
              ${className}
            `}
            aria-invalid={variant === "error"}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>

        {errorMessage && (
          <p className="text-sm text-semantic-error">{errorMessage}</p>
        )}
      </div>
    )
  }
)
