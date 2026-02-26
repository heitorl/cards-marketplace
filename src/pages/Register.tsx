import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { AuthHeader } from "../components/AuthHeader"
import { Link } from "react-router"

const Register = () => {
  return (
    <>
      <AuthHeader
        title="Crie sua conta"
        subtitle="Comece a trocar cartas e expandir sua coleção hoje mesmo."
      />

      <div className="pt-4 flex flex-col gap-4">
        <Input label="Nome" placeholder="John Doe" />
        <Input label="Email" placeholder="you@email.com" />
        <Input label="Senha" placeholder="******" />
        <Input label="Confirmar Senha" placeholder="******" />
        <Button>Criar conta</Button>
      </div>

      <span className="text-center text-muted-foreground">
        Já tem uma conta?{" "}
        <Link
          to="/login"
          className="text-primary font-semibold hover:opacity-80 transition"
        >
          Login
        </Link>
      </span>
    </>
  )
}

export default Register
