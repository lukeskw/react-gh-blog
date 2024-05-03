import { z } from 'zod'

const envSchema = z.object({
  VITE_GITHUB_USERNAME: z.string().min(3),
  VITE_GITHUB_REPOSITORY: z
    .string()
    .min(1)
    .regex(/^[\w-]+\/[\w-]+$/),
})

const _env = envSchema.safeParse(import.meta.env)

console.log(_env)
if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data
