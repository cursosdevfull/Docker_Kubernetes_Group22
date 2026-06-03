# Images

### Listar
```sh
docker images
docker image ls
```

### Filtrar
```sh
docker images | grep nginx
docker image ls | grep nginx
```

### Inspeccionar
```sh
docker image inspect <nombre | id>
```

### Descargar
```sh
docker pull <nombre>:<tag o version>
```

### Descargar desde un ubicación diferente a hub.docker.com
```sh
docker pull public.ecr.aws/lambda/python:3.12.2026.05.26.22-arm64
```

### Eliminar
```sh
docker rmi <nombre | id>:<tag o version>
docker rmi -f <nombre | id>:<tag o version>
```