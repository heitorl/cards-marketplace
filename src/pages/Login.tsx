import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { AuthHeader } from "../components/AuthHeader"
import { Link } from "react-router"

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <AuthHeader
          title="Bem-vindo de volta"
          subtitle="Acesse sua conta para continuar suas negociações."
        />
      </div>

      <div className="pt-2 flex flex-col gap-4">
        <Input label="Email" placeholder="you@email.com" />
        <Input label="Password" placeholder="******" />

        <Button>Entrar</Button>
      </div>
      <span className="text-center text-muted-foreground">
        Não tem uma conta?{" "}
        <Link
          to="/register"
          className="text-primary font-semibold hover:opacity-80 transition"
        >
          Registre
        </Link>
      </span>
    </>
  )
}

export default Login
