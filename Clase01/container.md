# Container

### Listar
```sh
docker ps
docker ps -a
```

### Filtrar
```sh
docker ps -a | grep 3000
```

### Eliminar
```sh
docker rm <nombre | id>:<tag o version>
docker rm -f <nombre | id>:<tag o version>
```

### Eliminar varios contenedores
```sh
docker rm -f <nombre | id>:<tag o version> <nombre | id>:<tag o version> <nombre | id>:<tag o version> ...
```