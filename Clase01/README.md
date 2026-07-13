# Clase 01 - Fundamentos de Docker

Introducción a los conceptos fundamentales de Docker: contenedores, imágenes y ejecución de comandos dentro de contenedores.

## 📋 Contenido

| Tema                         | Descripción                                                       |
| ---------------------------- | ----------------------------------------------------------------- |
| [Containers](./container.md) | Comandos para listar, filtrar y eliminar contenedores             |
| [Images](./image.md)         | Comandos para listar, descargar, inspeccionar y eliminar imágenes |

## 🛠️ Prácticas

| Práctica                        | Descripción                                                |
| ------------------------------- | ---------------------------------------------------------- |
| [01-nginx](./01-nginx/)         | Ejecutar un servidor web Nginx con Docker                  |
| [02-rabbitmq](./02-rabbitmq/)   | Ejecutar un message broker RabbitMQ                        |
| [03-sonarqube](./03-sonarqube/) | Ejecutar SonarQube para análisis de código                 |
| [04-nats](./04-nats/)           | Ejecutar NATS como sistema de mensajería                   |
| [05-jenkins](./05-jenkins/)     | Ejecutar Jenkins para CI/CD                                |
| [06-exec](./06-exec/)           | Ejecutar comandos dentro de contenedores con `docker exec` |

## 🚀 Comandos Rápidos

```sh
# Listar contenedores activos
docker ps

# Listar todos los contenedores
docker ps -a

# Listar imágenes descargadas
docker images

# Descargar una imagen
docker pull nginx:alpine

# Ejecutar un contenedor
docker run -d --name server-web -p 4500:80 nginx:alpine

# Eliminar un contenedor
docker rm -f server-web
```
