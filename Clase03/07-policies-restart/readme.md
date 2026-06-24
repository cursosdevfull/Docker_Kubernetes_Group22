# Policies Restart

### ON-FAILURE: Reinicia en caso ocurra una falla o error

```sh
docker run -d \
    --name server-nginx \
    --restart on-failure \
    nginx:alpine \
    sh -c "sleep 10; exit 1"
```

### UNLESS-STOPPED: Reinicia siempre a menos que lo detenga manualmente

```sh
docker run -d \
    --name server-nginx \
    --restart unless-stopped \
    nginx:alpine \
    sh -c "sleep 10; exit 1"
```

### ALWAYS: Reinicia siempre

```sh
docker run -d \
    --name server-nginx \
    --restart always \
    nginx:alpine \
    sh -c "sleep 10; exit 1"
```
