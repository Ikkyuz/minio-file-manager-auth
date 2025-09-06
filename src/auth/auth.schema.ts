import { t } from 'elysia'

export const AuthSchema = t.Object({
    id: t.String(),
    username: t.String(),
    password: t.String(),
    createdAt: t.String(),
    updatedAt: t.String()
})

export type AuthSchema = typeof AuthSchema.static