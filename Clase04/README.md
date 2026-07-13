# Clase 04 - Dockerfiles, Docker Compose e Introducción a Kubernetes

Creación de imágenes con Dockerfiles, optimización de caché, Docker Compose para aplicaciones multi-contenedor e introducción a Kubernetes.

## 📋 Contenido

| Tema                                      | Descripción                                             |
| ----------------------------------------- | ------------------------------------------------------- |
| [01-dockerfile](./01-dockerfile/)         | Construcción de imágenes con Dockerfile (Apache)        |
| [02-app-dockerfile](./02-app-dockerfile/) | Aplicación Node.js con Dockerfile, argumentos y workdir |
| [03-cache](./03-cache/)                   | Estrategias de caché para optimizar builds              |
| [04-apps](./04-apps/)                     | Múltiples aplicaciones: Angular y NestJS                |
| [05-docker-compose](./05-docker-compose/) | Orquestación multi-contenedor con Docker Compose        |
| [06-kubernetes](./06-kubernetes/)         | Introducción a Kubernetes                               |

## 📁 Archivos de Configuración

| Archivo                          | Descripción                              |
| -------------------------------- | ---------------------------------------- |
| [.dockerignore](./.dockerignore) | Archivos excluidos del contexto de build |
| [.gitignore](./.gitignore)       | Archivos excluidos del repositorio Git   |

## 🚀 Comandos Rápidos

```sh
# Construir una imagen con Dockerfile
docker build -t mi-app .

# Construir con argumentos
docker build --build-arg PORT=3000 -t mi-app .

# Ejecutar Docker Compose
docker compose up -d

# Detener Docker Compose
docker compose down
```
