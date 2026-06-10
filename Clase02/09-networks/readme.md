# Networks

### Listar

```sh
docker network ls
```

### Crear

```sh
docker network create <nombre de la red> --driver bridge
docker network create <nombre de la red> -d bridge
```

### Crear contenedor asociado a una red

```sh
docker run -d \
    --name <nombre contenedor> \
    --network <nombre de red> \
    <nombre de la imagen>
```

### Inpeccionar

```sh
docker network inspect <nombre o id de la red>
```

### Asociar un contenedor existente a una red

```sh
docker network connect <nombre de la red> <nombre o id del contenedor>
```

### Crear red con subnet y gateway

```sh
docker network create <nombre de la red> \
    -d bridge \
    --subnet <direccion ip>/<sub-mask>
    --gateway <direccion ip>
```

### Crear contenedor con una ip específica

```sh
docker run -d \
    --name <nombre contenedor> \
    --network <nombre de la red> \
    --ip <direccion ip> \
    <nombre de la imagen>
```

### Crear contenedor asignado a la red host

```sh
docker run -d \
    --name <nombre contenedor> \
    --network host \
    <nombre de la imagen>
```
