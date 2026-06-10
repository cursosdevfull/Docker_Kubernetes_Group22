# Postgres

### Server

```sh
docker run -d \
    --name postgres-server \
    -p 5432:5432 \
    -e POSTGRES_USER=user \
    -e POSTGRES_PASSWORD=12345 \
    -e POSTGRES_DB=db \
    postgres:14.23-alpine3.23
```

### Client

```sh
docker run -d \
    --name postgres-client \
    -p 8090:80 \
    -e PGADMIN_DEFAULT_EMAIL=sergio@email.com \
    -e PGADMIN_DEFAULT_PASSWORD=12345 \
    dpage/pgadmin4:9.15.0
```
