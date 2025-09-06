import { Elysia } from "elysia";
import jwt from "@elysiajs/jwt";
import { swagger } from "@elysiajs/swagger";
import { AuthController } from "./auth/auth.controller";

const app = new Elysia()
  .use(swagger())
  .use(
    jwt({
      name: "jwt",
      secret: "SUPER_SECRET_KEY",
    })
  )
  .get("/", () => "Hello Elysia")
  .use(AuthController)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
