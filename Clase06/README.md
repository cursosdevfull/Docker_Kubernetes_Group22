# Clase 06 - Kubernetes Avanzado y Despliegue en la Nube

Temas avanzados de Kubernetes: usuarios, contextos, RBAC, aplicaciones en Kubernetes, registry de contenedores y despliegue en AWS, Azure y GCP.

## 📋 Contenido

| Tema                                  | Descripción                                          |
| ------------------------------------- | ---------------------------------------------------- |
| [01-kubernetes](./01-kubernetes/)     | Kubernetes avanzado: usuarios, contextos y RBAC      |
| [02-apps](./02-apps/)                 | Aplicaciones multi-servicio con Docker Compose       |
| [03-registry](./03-registry/)         | Registro de contenedores (Docker Hub, ECR, ACR, GCR) |
| [04-deploy-local](./04-deploy-local/) | Despliegue local en Kubernetes                       |
| [05-deploy-aws](./05-deploy-aws/)     | Despliegue en AWS (EKS)                              |
| [06-deploy-azure](./06-deploy-azure/) | Despliegue en Azure (AKS)                            |
| [07-deploy-gcp](./07-deploy-gcp/)     | Despliegue en GCP (GKE)                              |

## 🚀 Comandos Rápidos

```sh
# Ver contextos de kubectl
kubectl config get-contexts

# Cambiar de contexto
kubectl config use-context mi-cluster

# Crear un role y rolebinding (RBAC)
kubectl create role pod-reader --verb=get,list,watch --resource=pods
kubectl create rolebinding pod-reader-binding --role=pod-reader --user=usuario

# Aplicar despliegue local
kubectl apply -f 04-deploy-local/

# Autenticarse en AWS ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com
```
