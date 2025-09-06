# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Development

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

# Postgres

start postgres container

```sh
docker compose up -d
```

Username: `postgres`
Password: `mysecretpassword`
Database: `docs`
Host: `localhost`
Port: `5432`

---

# Prisma

init prisma

```sh
bun x prisma@latest init --datasource-provider=postgresql
```

generate types

```sh
bun x prisma generate
```

```sh
bun x prisma migrate dev --name <migration name>
```

```sh
bun x prisma db push
```

```sh
bun x prisma migrate reset
```

# Build docker image

```sh
docker build -t minio-file-manager .
```

# build docker image via docker compose

```sh
docker compose build
```

# Start app container via docker compose

```sh
docker compose up -d
```

# Start Database services

```sh
docker compose -f compose.services.yaml up -d
```

# Env Setup for Docker compose

```sh
DATABASE_URL="postgresql://<user>:<password>@<postgres uri>:5432/docs"
MINIO_ENDPOINT="http://<redis uri>:9000"
MINIO_ACCESS_KEY="<minio access key>"
MINIO_SECRET_KEY="<minio secret key>"
```

# How to run minio-file-manager

```sh
docker compose -f compose.services.yaml up -d
docker compose up -d
```

go to url http://localhost:3000
