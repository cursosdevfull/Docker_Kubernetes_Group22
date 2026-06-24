# Wordpress

### Crear una red

```sh
docker network create net-wp -d bridge
```

### Crear un contenedor de MySQL

```sh
docker run -d \
    --name server-mysql \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=12345 \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=54321 \
    -e MYSQL_DATABASE=db \
    -v $(pwd -W)/data-mysql:/var/lib/mysql \
    --network net-wp \
    mysql:9
```

### Crear un contenedor de Wordpress

```sh
docker run -d \
    --name server-wp \
    -p 3000:80 \
    -e WORDPRESS_DB_HOST=server-mysql \
    -e WORDPRESS_DB_USER=user \
    -e WORDPRESS_DB_PASSWORD=54321 \
    -e WORDPRESS_DB_NAME=db \
    --network net-wp \
    -v $(pwd -W)/data-wp:/var/www/html \
    wordpress
```
