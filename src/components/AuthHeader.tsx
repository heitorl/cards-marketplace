import { AuthLogo } from "./AuthLogo"

interface AuthHeaderProps {
  title: string
  subtitle: string
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <AuthLogo />

      <div className="flex flex-col text-center">
        <h2 className="text-2xl text-foreground">{title}</h2>
        <span className="text-muted-foreground text-sm">{subtitle}</span>
      </div>
    </div>
  )
}
