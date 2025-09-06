import { AuthRepository } from "./auth.repository";
import { AuthSchema } from "./auth.schema";

export namespace AuthService {
    export async function register(
        user: Omit<AuthSchema, "id" | "createdAt" | "updatedAt">
    ) {
        const hashPassword = await Bun.password.hash(user.password);
        return await AuthRepository.create({
            ...user,
            password: hashPassword
        });
    }

    export async function login(username: string, password: string, jwt: any) {
        const user = await AuthRepository.findUser(username);
        if (!user) {
            throw new Error("User not found");
        }
        const isPasswordValid = await Bun.password.verify(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }

        const payload = {
            username: user.username
        }

        const token = await jwt.sign(payload);
        return {token, user: username}
    }
}