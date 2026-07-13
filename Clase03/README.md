# Clase 03 - Docker Avanzado

Temas avanzados de Docker: segregación de redes, limpieza de recursos, volúmenes, límites de recursos, healthchecks, políticas de reinicio, semántica de etiquetas y Dockerfile.

## 📋 Contenido

| Tema                                            | Descripción                                             |
| ----------------------------------------------- | ------------------------------------------------------- |
| [01-segregacion-redes](./01-segregacion-redes/) | Segregación y aislamiento de redes en Docker            |
| [02-prune](./02-prune/)                         | Limpieza de recursos no utilizados con `docker prune`   |
| [03-commit](./03-commit/)                       | Creación de imágenes personalizadas con `docker commit` |
| [04-volumes](./04-volumes/)                     | Gestión de volúmenes: host, named y anonymous           |
| [05-limites-recursos](./05-limites-recursos/)   | Límites de CPU y memoria en contenedores                |
| [06-healthchecks](./06-healthchecks/)           | Verificación del estado de salud de contenedores        |
| [07-policies-restart](./07-policies-restart/)   | Políticas de reinicio de contenedores                   |
| [08-semantica](./08-semantica/)                 | Semántica de etiquetas y versionado de imágenes         |
| [09-dockerfile](./09-dockerfile/)               | Introducción a Dockerfile                               |

## 🚀 Comandos Rápidos

```sh
# Limpiar recursos no utilizados
docker system prune -a

# Crear una imagen desde un contenedor
docker commit contenedor mi-imagen:tag

# Crear un volumen nombrado
docker volume create mi-volumen

# Ejecutar contenedor con límites de recursos
docker run -d --name app --memory=256m --cpus=1 nginx:alpine

# Agregar healthcheck
docker run -d --name app \
    --health-cmd="curl -f http://localhost || exit 1" \
    nginx:alpine
```
