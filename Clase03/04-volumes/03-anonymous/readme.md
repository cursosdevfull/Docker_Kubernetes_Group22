# Volúmen anónimo

```sh
docker run -d \
    --name server-nginx \
    -p 3000:80 \
    -v /usr/share/nginx/html \
    nginx:alpine
```
