# Dockerfile: Apache

### Crear una imagen

```sh
docker build -t mi-apache:1.0.0 .
```

### Crear el contenedor

```sh
docker run -d \
    --name server-apache \
    -p 9000:80 \
    mi-apache:1.0.0
```
