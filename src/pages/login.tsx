import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { AuthHeader } from "../components/AuthHeader"
import { Link } from "react-router"
import { loginSchema, type LoginFormData } from "../schemas/auth-schemas"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLogin } from "../hooks/use-login"

const Login = () => {
  const { mutateAsync } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    await mutateAsync(data)
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <AuthHeader
          title="Bem-vindo de volta"
          subtitle="Acesse sua conta para continuar suas negociações."
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-2 flex flex-col gap-4"
      >
        <Input
          label="Email"
          placeholder="you@email.com"
          {...register("email")}
          errorMessage={errors.email?.message}
          variant={errors.email ? "error" : "default"}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="******"
          {...register("password")}
          errorMessage={errors.password?.message}
          variant={errors.password ? "error" : "default"}
        />

        <Button type="submit">Entrar</Button>
      </form>
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
