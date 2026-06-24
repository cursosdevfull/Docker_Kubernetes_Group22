# MySQL con volumen

```sh
docker run -d \
    --name server-mysql \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=12345 \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=54321 \
    -e MYSQL_DATABASE=db \
    -v $(pwd -W)/data:/var/lib/mysql \
    mysql:9
```
