import type { ButtonHTMLAttributes } from "react"
import { LoaderCircle } from "lucide-react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
  variant?: "primary" | "secondary"
}

export const Button = ({
  children,
  isLoading = false,
  disabled,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: `
      bg-button-gradient
      text-white
    `,
    secondary: `
      bg-white
      text-black
      border border-gray-300
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
        py-2.5
        px-4
        cursor-pointer
        transition
        ${variants[variant]}
        ${
          isLoading || disabled
            ? "opacity-60 cursor-not-allowed"
            : "hover:opacity-90"
        }
      `}
    >
      {isLoading && (
        <LoaderCircle className="h-4 w-4 animate-spin text-white" />
      )}
      {children}
    </button>
  )
}
