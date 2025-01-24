import v from '@/lib/zod-validations'
import { z } from 'zod'

export const taskSchema = z.object({
    title: v.string({
        required: true,
    }),
    status: v.string({
        required: true,
    }),
})
export type Task = z.infer<typeof taskSchema>
