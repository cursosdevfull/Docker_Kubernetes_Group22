# Healthchecks

### NGINX

```sh
docker run -d \
    --name server-nginx \
    --health-cmd="curl http://localhost" \
    --health-interval=10s \
    --health-retries=3 \
    --health-timeout=2s \
    --health-start-period=8s \
    nginx:alpine
```

### MySQL

```sh
docker run -d \
    --name server-mysql \
    -e MYSQL_ROOT_PASSWORD=12345 \
    --health-cmd="mysqladmin ping -h localhost" \
    --health-interval=10s \
    --health-retries=3 \
    --health-timeout=2s \
    --health-start-period=10s \
    mysql:9
```
