# Commit

### Crear un contenedor

```sh
docker run -d --name serverweb -p 5000:80 nginx:alpine
```

### Crear una imagen desde un contenedor

```sh
docker commit <nombre contenedor> <nombre de la imagen a crear>:<tag>
```
