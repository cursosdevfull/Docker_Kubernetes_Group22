# Drupal

### Crear una red

```sh
docker network create net-drupal -d bridge
```

### Crear volúmenes nombrados

```sh
docker volume create vol-drupal-mysql
docker volume create vol-drupal-modules
docker volume create vol-drupal-profiles
docker volume create vol-drupal-sites
docker volume create vol-drupal-themes
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
    -v vol-drupal-mysql:/var/lib/mysql \
    --network net-drupal \
    mysql:9
```

### Crear un contenedor de Drupal

```sh
docker run -d \
    --name server-drupal \
    -p 3000:80 \
    -v vol-modules:/var/www/html/modules \
    -v vol-profiles:/var/www/html/profiles \
    -v vol-sites:/var/www/html/sites \
    -v vol-themes:/var/www/html/themes \
    --network net-drupal \
    drupal
```
