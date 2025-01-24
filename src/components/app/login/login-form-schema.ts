import v from '@/lib/zod-validations'
import { z } from 'zod'

export const loginSchema = z.object({
  user: v.string({
    required: true,
    type: 'text'
  }),
  password: v.string({
    required: true,
    type: 'text'
  })
})
export type Login = z.infer<typeof loginSchema>
