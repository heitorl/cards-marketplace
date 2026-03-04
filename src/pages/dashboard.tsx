import { useEffect, useState } from "react"
import { Header } from "../components/header"
import { Explore } from "../components/tabs/explore"
import { History } from "../components/tabs/history"
import { MyCollection } from "../components/tabs/my-collection"
import { Trade } from "../components/tabs/trade"
import { DashboardMenu } from "../components/dashboard-menu"
import { WelcomeStarterModal } from "../components/welcome-starter-modal"

export type TabType = "collection" | "explore" | "trade" | "feed"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<TabType>("collection")

  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const handler = () => setShowWelcome(true)

    window.addEventListener("starter-pack-received", handler)

    return () => window.removeEventListener("starter-pack-received", handler)
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case "collection":
        return <MyCollection />
      case "explore":
        return <Explore />
      case "trade":
        return <Trade />
      case "feed":
        return <History />
      default:
        return null
    }
  }

  return (
    <div className="w-full">
      <Header />
      <DashboardMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <WelcomeStarterModal
        open={showWelcome}
        onClose={() => setShowWelcome(false)}
      />
      <div className="mt-8 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-42">
        {renderContent()}
      </div>
    </div>
  )
}

export default Dashboard
