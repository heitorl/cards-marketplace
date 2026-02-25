import { Button } from "./components/Button"
import { Input } from "./components/Input"

function App() {
  return (
    <div className="min-h-screen bg-app-gradient">
      <h1 className="text-3xl font-bold text-muted-foreground underline">
        Hello world!
      </h1>
      <div className="w-80 h-64 flex flex-col justify-around">
        <Input placeholder="Nome" />

        <Input
          type="password"
          variant="error"
          errorMessage="Password is required"
        />
        <Button>Sign in</Button>
      </div>
    </div>
  )
}

export default App
