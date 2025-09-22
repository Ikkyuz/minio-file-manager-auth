import { t } from "elysia"

export const authSchema = t.Object({
    id: t.String(),
    username: t.String(),
    password: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date()
})

export type AuthSchema = typeof authSchema.static