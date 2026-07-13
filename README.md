# Docker & Kubernetes - Group 22

Curso completo de Docker y Kubernetes, cubriendo desde los fundamentos hasta el despliegue en la nube (AWS, Azure, GCP).

## 📚 Contenido del Curso

### Clase 01 - Fundamentos de Docker

- **Containers e Imágenes**: Comandos básicos (`docker ps`, `docker images`, `docker pull`, `docker rm`, `docker rmi`)
- **Práctica con imágenes**:
  - [Nginx](./Clase01/01-nginx/)
  - [RabbitMQ](./Clase01/02-rabbitmq/)
  - [SonarQube](./Clase01/03-sonarqube/)
  - [NATS](./Clase01/04-nats/)
  - [Jenkins](./Clase01/05-jenkins/)
- **Ejecución de comandos en contenedores**: [`docker exec`](./Clase01/06-exec/)
- 📄 [Guía de Containers](./Clase01/container.md)
- 📄 [Guía de Imágenes](./Clase01/image.md)

### Clase 02 - Docker en Profundidad

- [Variables de entorno](./Clase02/01-environment/)
- [Contenedores temporales](./Clase02/02-temporal-containers/)
- [MySQL](./Clase02/03-mysql/)
- [Logs](./Clase02/04-logs/)
- [PostgreSQL](./Clase02/05-postgres/)
- [MongoDB](./Clase02/06-mongo/)
- [n8n (automatización)](./Clase02/07-n8n/)
- [Hostname](./Clase02/08-hostname/)
- [Redes en Docker](./Clase02/09-networks/)

### Clase 03 - Docker Avanzado

- [Segregación de redes](./Clase03/01-segregacion-redes/)
- [Limpieza de recursos (`docker prune`)](./Clase03/02-prune/)
- [Creación de imágenes con `docker commit`](./Clase03/03-commit/)
- [Volúmenes](./Clase03/04-volumes/)
- [Límites de recursos](./Clase03/05-limites-recursos/)
- [Healthchecks](./Clase03/06-healthchecks/)
- [Políticas de reinicio](./Clase03/07-policies-restart/)
- [Semántica de etiquetas](./Clase03/08-semantica/)
- [Dockerfile](./Clase03/09-dockerfile/)

### Clase 04 - Dockerfiles, Docker Compose e Introducción a Kubernetes

- [Dockerfile](./Clase04/01-dockerfile/)
- [Aplicación con Dockerfile](./Clase04/02-app-dockerfile/)
- [Estrategias de caché](./Clase04/03-cache/)
- [Múltiples aplicaciones](./Clase04/04-apps/)
- [Docker Compose](./Clase04/05-docker-compose/)
- [Introducción a Kubernetes](./Clase04/06-kubernetes/)
- Archivos de configuración: [`.dockerignore`](./Clase04/.dockerignore), [`.gitignore`](./Clase04/.gitignore)

### Clase 05 - Kubernetes

- [Kubernetes - Conceptos y práctica](./Clase05/01-kubernetes/)

### Clase 06 - Kubernetes Avanzado y Despliegue en la Nube

- [Kubernetes avanzado](./Clase06/01-kubernetes/)
- [Aplicaciones en Kubernetes](./Clase06/02-apps/)
- [Registry de contenedores](./Clase06/03-registry/)
- [Despliegue local](./Clase06/04-deploy-local/)
- [Despliegue en AWS](./Clase06/05-deploy-aws/)
- [Despliegue en Azure](./Clase06/06-deploy-azure/)
- [Despliegue en GCP](./Clase06/07-deploy-gcp/)

## 📊 Diagramas

El curso incluye diagramas de arquitectura y conceptos para cada clase:

- [Clase 01 - Diagrama](./Diagramas/Clase01.xml)
- [Clase 02 - Diagrama](./Diagramas/Clase02.xml)
- [Clase 03 - Diagrama](./Diagramas/Clase03.xml)
- [Clase 04 - Diagrama](./Diagramas/Clase04.xml)
- [Clase 05 - Diagrama](./Diagramas/Clase05.xml)
- [Clase 06 - Diagrama](./Diagramas/Clase06.xml)

## 🛠️ Tecnologías Utilizadas

| Tecnología                       | Uso                                         |
| -------------------------------- | ------------------------------------------- |
| **Docker**                       | Contenedorización de aplicaciones           |
| **Kubernetes**                   | Orquestación de contenedores                |
| **Docker Compose**               | Definición de aplicaciones multi-contenedor |
| **AWS**                          | Despliegue en la nube (ECR, EKS)            |
| **Azure**                        | Despliegue en la nube (AKS)                 |
| **GCP**                          | Despliegue en la nube (GKE)                 |
| **Nginx**                        | Servidor web                                |
| **MySQL / PostgreSQL / MongoDB** | Bases de datos                              |
| **RabbitMQ / NATS**              | Message brokers                             |
| **Jenkins**                      | CI/CD                                       |
| **SonarQube**                    | Análisis de calidad de código               |
| **n8n**                          | Automatización de flujos de trabajo         |
| **Helm**                         | Gestión de paquetes para Kubernetes         |

## ✅ Prerrequisitos

- [Docker](https://www.docker.com/) instalado
- [Kubernetes](https://kubernetes.io/) (kubectl)
- [Helm](https://helm.sh/)
- Cuentas en la nube para los módulos de despliegue:
  - [AWS CLI](https://aws.amazon.com/cli/)
  - [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/)
  - [Google Cloud SDK](https://cloud.google.com/sdk)

## 🚀 Cómo Usar Este Repositorio

Cada carpeta de clase contiene ejercicios prácticos con sus respectivas instrucciones. Navega a la carpeta del tema que te interese y sigue las instrucciones de cada ejercicio.

```bash
# Clonar el repositorio
git clone https://github.com/cursosdevfull/Docker_Kubernetes_Group22.git

# Navegar a una clase específica
cd Clase01/01-nginx
```

## 📝 Créditos

Curso de Docker y Kubernetes - Group 22.  
Material práctico y teórico para dominar la contenedorización y orquestación de aplicaciones.
