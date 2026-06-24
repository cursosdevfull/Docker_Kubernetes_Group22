# NGINX Custom

```sh
docker run -d \
    --name server-web \
    -p 3000:80 \
    -v $(pwd -W)/html:/app \
    -v $(pwd -W)/nginx/setting.conf:/etc/nginx/conf.d/default.conf \
    nginx:alpine
```
