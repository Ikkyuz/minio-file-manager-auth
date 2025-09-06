import Elysia, { t } from "elysia";
import { AuthSchema } from "./auth.schema";
import { AuthService } from "./auth.service";

export const AuthController = new Elysia({ prefix: "/auth" })
  .post(
    "/register",
    async ({ body, set }) => {
      try {
        const user = await AuthService.register(body);
        set.status = "Created"; 
        return { success: true, user };
      } catch (err: any) {
        console.error("Error registering user:", err);
        set.status = "Bad Request";
        return { success: false, error: err.message };
      }
    },
    {
      body: t.Omit(AuthSchema, ["id", "createdAt", "updatedAt"]),
    }
  )

  .post(
    "/login",
    async ({ body, set, jwt }) => {
      try {
        const { username, password } = body;
        const user = await AuthService.login(username, password, jwt);
        set.status = "OK";
        return { success: true, ...user };
      } catch (err: any) {
        console.error("Error logging in:", err);
        set.status = "Unauthorized";
        return { success: false, error: err.message };
      }
    },
    {
      body: t.Object({
        username: t.String(),
        password: t.String(),
      }),
    }
  )

  .get(
    "/profile",
    async ({ jwt, set, headers }) => {
        try {
            const authHeader = headers["authorization"];
            if (!authHeader) throw new Error("Authorization header missing");

            const token = authHeader.split(" ")[1];
            if (!token) throw new Error("Token missing");

            const user = await jwt.verify(token);
            set.status = "OK";
            return { success: true, user };
        } catch (err: any) {
            console.error("Error verifying token:", err);
            set.status = "Unauthorized";
            return { success: false, error: err.message };
        }
    }
  )