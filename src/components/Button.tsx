import type { ButtonHTMLAttributes } from "react"
import { LoaderCircle } from "lucide-react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  variant?: "primary" | "secondary" | "card"
}

export const Button = ({
  children,
  isLoading = false,
  disabled,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: `
      bg-button-gradient
      text-white
      py-2.5 px-4
    `,
    secondary: `
      bg-white
      text-black
      border border-gray-300
      py-2.5 px-4
    `,
    card: `
      bg-button-gradient
      text-white
      py-1.5 px-0      
    `,
  }

  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      className={`
        w-full
        rounded-lg
        flex
        items-center
        justify-center
        gap-2
        cursor-pointer
        transition
        ${variants[variant]}
        ${
          isLoading || disabled
            ? "opacity-60 cursor-not-allowed"
            : "hover:opacity-90"
        }
        ${className}
      `}
    >
      {isLoading && (
        <LoaderCircle className="h-4 w-4 animate-spin text-white" />
      )}
      {children}
    </button>
  )
}
