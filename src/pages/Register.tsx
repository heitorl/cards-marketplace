import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { AuthHeader } from "../components/AuthHeader"
import { Link } from "react-router"
import { useForm } from "react-hook-form"
import { registerSchema, type RegisterFormData } from "../schemas/AuthSchemas"
import { zodResolver } from "@hookform/resolvers/zod"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
    console.log(data)
  }

  return (
    <>
      <AuthHeader
        title="Crie sua conta"
        subtitle="Comece a trocar cartas e expandir sua coleção hoje mesmo."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4 flex flex-col gap-4"
      >
        <Input
          label="Nome"
          placeholder="John Doe"
          {...register("name")}
          errorMessage={errors.name?.message}
          variant={errors.name ? "error" : "default"}
        />

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

        <Input
          label="Confirmar Senha"
          type="password"
          placeholder="******"
          {...register("confirmPassword")}
          errorMessage={errors.confirmPassword?.message}
          variant={errors.confirmPassword ? "error" : "default"}
        />
        <Button type="submit">Criar conta</Button>
      </form>

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
