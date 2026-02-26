import { z } from "zod"

export const loginSchema = z.object({
  email: z.email("Digite um email válido"),

  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

export const registerSchema = z
  .object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z.email("Email inválido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })

export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
