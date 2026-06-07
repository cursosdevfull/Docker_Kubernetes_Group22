# MySQL

### Server

```sh
docker run -d \
    --name mysql-server \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=12345 \
    -e MYSQL_DATABASE=db \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=54321 \
    mysql:9
```

### Client

```sh
docker run -d \
    --name mysql-client \
    -p 8080:80 \
    -e PMA_ARBITRARY=1 \
    phpmyadmin
```

```sh
docker run -d \
    --name mysql-client \
    -p 8080:80 \
    -e PMA_HOST=172.17.0.3 \
    phpmyadmin
```

```sh
docker run -d \
    --name mysql-client \
    -p 8080:80 \
    -e PMA_HOST=172.17.0.3 \
    -e PMA_USER=user \
    -e PMA_PASSWORD=54321 \
    phpmyadmin
```
