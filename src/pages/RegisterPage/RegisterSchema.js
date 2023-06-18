import { z } from "zod"

export const RegisterSchema = z.object({
    bio: z
        .string()
        .nonempty('A bio é obrigatória')
        .min(8, 'A bio deve conter pelo menos 8 carácteres'),
    contact: z
        .string()
        .nonempty('O contato é obrigatório')
        .min(9,'O contato deve conter pelo menos 9 carácteres'),
    course_module: z.
        string(),
    email: z
        .string()
        .email('o email deve está em um formato válido')
        .nonempty('O email é obrigatório'),
    name: z
        .string()
        .nonempty('O nome é obrigatório')
        .min(2,'O nome deve conter no mínimo 2 carácteres'),
    password: z
        .string()
        .min(8,'A senha deve conter no mínimo 8 carácterres')
        .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,}$/, 'A senha deve conter no mínimo 8 caracteres, contendo letras, números e pelo menos um caractere especial'),
})