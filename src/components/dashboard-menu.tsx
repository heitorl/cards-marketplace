import { Compass, Layers, Radio, Repeat } from "lucide-react"

export type TabType = "collection" | "explore" | "trade" | "feed"
type Props = {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

export const DashboardMenu = ({ activeTab, setActiveTab }: Props) => {
  const menuItems = [
    { key: "collection", label: "Minha Coleção", icon: Layers },
    { key: "explore", label: "Explorar", icon: Compass },
    { key: "trade", label: "Troca", icon: Repeat },
    { key: "feed", label: "Feed", icon: Radio },
  ] as const

  return (
    <div className="border-b border-gray-200 w-full bg-card mt-4 h-14">
      <div className="flex w-full h-full">
        {menuItems.map((item) => {
          const isActive = activeTab === item.key
          const Icon = item.icon

          return (
            <div
              key={item.key}
              className="relative flex-1 h-full flex items-center justify-center"
            >
              <button
                onClick={() => setActiveTab(item.key)}
                className={` relative flex-1 flex flex-col sm:flex-row 
                items-center justify-center gap-1 sm:gap-2
                py-3 transition-all duration-200
                text-sm sm:text-base font-medium cursor-pointer
                ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}
              `}
              >
                <Icon size={20} />
                <span className="hidden sm:block">{item.label}</span>
              </button>

              {isActive && (
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
