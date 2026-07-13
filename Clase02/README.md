# Clase 02 - Docker en Profundidad

Exploración avanzada de Docker: variables de entorno, contenedores temporales, bases de datos, logs, hostname y redes.

## 📋 Contenido

| Tema                                                | Descripción                                 |
| --------------------------------------------------- | ------------------------------------------- |
| [01-environment](./01-environment/)                 | Uso de variables de entorno en contenedores |
| [02-temporal-containers](./02-temporal-containers/) | Contenedores temporales y su ciclo de vida  |
| [03-mysql](./03-mysql/)                             | Ejecutar MySQL Server y cliente phpMyAdmin  |
| [04-logs](./04-logs/)                               | Gestión y visualización de logs en Docker   |
| [05-postgres](./05-postgres/)                       | Ejecutar PostgreSQL en un contenedor        |
| [06-mongo](./06-mongo/)                             | Ejecutar MongoDB en un contenedor           |
| [07-n8n](./07-n8n/)                                 | Automatización de flujos de trabajo con n8n |
| [08-hostname](./08-hostname/)                       | Configuración de hostname en contenedores   |
| [09-networks](./09-networks/)                       | Redes en Docker: tipos, creación y gestión  |

## 🚀 Comandos Rápidos

```sh
# Ejecutar MySQL con variables de entorno
docker run -d --name mysql-server -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=12345 \
    -e MYSQL_DATABASE=db \
    mysql:9

# Ver logs de un contenedor
docker logs mysql-server

# Crear una red
docker network create mi-red

# Conectar un contenedor a una red
docker network connect mi-red mysql-server
```
