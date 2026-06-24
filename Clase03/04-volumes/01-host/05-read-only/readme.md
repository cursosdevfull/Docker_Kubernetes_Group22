# Volume Read Only

```sh
docker run -d \
    --name server-web \
    -p 3000:80 \
    -v $(pwd -W)/html:/app:ro \
    -v $(pwd -W)/nginx/setting.conf:/etc/nginx/conf.d/default.conf:ro \
    nginx:alpine
```
