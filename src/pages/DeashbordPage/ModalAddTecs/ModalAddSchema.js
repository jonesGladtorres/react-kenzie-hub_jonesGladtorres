import { z } from "zod"

export const ModalAddSchema = z.object({
    title: z.string().nonempty('O Nome é obrigatório!'),
    status: z.string().nonempty('O Status é obrigatório!')
})