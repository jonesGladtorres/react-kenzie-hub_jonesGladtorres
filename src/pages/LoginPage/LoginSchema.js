import { z } from "zod";

export const LoginSchema = z.object({
    email: z
        .string()
        .email('O email deve ser em um formato válido')
        .nonempty('Insira um email para realizar o login'),
    password: z
        .string()
        .nonempty('Insira uma senha para realizar o login')
})