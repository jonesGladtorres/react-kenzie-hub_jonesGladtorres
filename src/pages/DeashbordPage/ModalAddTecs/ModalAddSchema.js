import { z } from "zod"

export const ModalAddSchema = z.object({
    title: z.string().nonempty('O Texto é obrigatório!'),
    status: z.string().nonempty('O Status é obrigatório!')
})