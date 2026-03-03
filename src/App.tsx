import { BrowserRouter } from "react-router"
import { AppRoutes } from "./routes/app-routes"

function App() {
  return (
    <div className="min-h-dvh bg-app-gradient w-full h-full">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
