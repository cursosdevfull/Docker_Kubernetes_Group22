# Clase 05 - Kubernetes

Conceptos fundamentales y práctica con Kubernetes: recursos, pods, deployments, servicios, namespaces, configuración y seguridad.

## 📋 Contenido

| Tema                                                      | Descripción                                         |
| --------------------------------------------------------- | --------------------------------------------------- |
| [01-resources](./01-kubernetes/01-resources/)             | Recursos básicos de Kubernetes                      |
| [02-pods](./01-kubernetes/02-pods/)                       | Unidad mínima de despliegue: Pods                   |
| [03-replicasets](./01-kubernetes/03-replicasets/)         | Escalamiento con ReplicaSets                        |
| [04-deployments](./01-kubernetes/04-deployments/)         | Gestión declarativa con Deployments                 |
| [05-services](./01-kubernetes/05-services/)               | Exposición de aplicaciones con Services             |
| [06-namespaces](./01-kubernetes/06-namespaces/)           | Aislamiento lógico con Namespaces                   |
| [07-configmaps](./01-kubernetes/07-configmaps/)           | Configuración externalizada con ConfigMaps          |
| [08-secrets](./01-kubernetes/08-secrets/)                 | Gestión de datos sensibles con Secrets              |
| [09-probes](./01-kubernetes/09-probes/)                   | Health checks: liveness, readiness y startup probes |
| [10-limits-requests](./01-kubernetes/10-limits-requests/) | Límites y solicitudes de recursos                   |
| [11-limit-range](./01-kubernetes/11-limit-range/)         | LimitRange: límites por defecto en namespaces       |
| [12-resource-quota](./01-kubernetes/12-resource-quota/)   | ResourceQuota: cuotas a nivel de namespace          |
| [13-certificates](./01-kubernetes/13-certificates/)       | Gestión de certificados en Kubernetes               |

## 🚀 Comandos Rápidos

```sh
# Listar pods
kubectl get pods

# Crear un deployment
kubectl create deployment nginx --image=nginx:alpine

# Exponer un deployment
kubectl expose deployment nginx --port=80 --type=NodePort

# Listar servicios
kubectl get svc

# Crear un namespace
kubectl create namespace mi-namespace

# Aplicar un manifiesto
kubectl apply -f archivo.yml
```
