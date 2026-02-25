import type { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-button-gradient w-full rounded-lg flex items-center justify-center py-2.5 px-4  cursor-pointer text-white opacity-50"
    >
      {children}
    </button>
  )
}
