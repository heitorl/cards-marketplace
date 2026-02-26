import { BrowserRouter } from "react-router"
import { AppRoutes } from "./routes/AppRoutes"

function App() {
  return (
    <div className="min-h-screen bg-app-gradient flex justify-center items-center">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
