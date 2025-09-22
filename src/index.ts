import { Elysia } from "elysia";
import { AuthController } from "./auth/auth.controller";
import jwt from "@elysiajs/jwt";
import swagger from "@elysiajs/swagger";

const app = new Elysia()
  .use(swagger({
    path: "/docs"
  }))
  .use(
    jwt({
      name: "jwt",
      secret: "SUPER_SECRET_KEY",
      exp: '1h'
    })
  )
  .get("/", () => "Hello Elysia")
  .use(AuthController)
  .listen(Bun.env.PORT || 3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);