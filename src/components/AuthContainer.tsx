import type { ReactNode } from "react"

interface AuthContainerProps {
  children: ReactNode
}

export const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <div
      className="
          w-full
          max-w-lg
          rounded-2xl
          border
          border-[#e5e7eb]
          bg-card
          backdrop-blur-md
          shadow-2xl shadow-purple-500/10
          p-8
          flex
          flex-col
          gap-3
        "
    >
      {children}
    </div>
  )
}
