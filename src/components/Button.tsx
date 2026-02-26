import type { ButtonHTMLAttributes } from "react"
import { LoaderCircle } from "lucide-react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean
}

export const Button = ({
  children,
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      className={`
        bg-button-gradient
        w-full
        rounded-lg
        flex
        items-center
        justify-center
        gap-2
        py-2.5
        px-4
        text-white
        cursor-pointer
        transition
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
