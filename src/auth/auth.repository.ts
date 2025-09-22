import prisma from "../providers/database/database.provider"
import { AuthSchema } from "./auth.schema"

export namespace AuthRepository {
    export async function create(
        user: Omit<AuthSchema, "id" | "createdAt" | "updatedAt">
    ) {
        return await prisma.user.create({
            data: user
        })
    }
    export async function findUser(username:string){
        return await prisma.user.findUnique({
            where: { username},
            select: {
                id:false,
                username: true,
                password: true,
                createdAt:false,
                updatedAt:false
            }
        })
    }
}