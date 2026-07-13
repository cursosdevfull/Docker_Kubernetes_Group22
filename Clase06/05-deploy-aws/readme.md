# Despliegue en AWS

### Herramientas a instalar

- Chocolatey (Windows)
- Brew (Mac)
- aws-cli (https://aws.amazon.com/es/cli)
- helm (choco install kubernetes-helm -y)
- eksctl (choco install eksctl -y)

### Configurar un usuario que acceda a AWS

```bash
aws configure
```

### Crear Cluster EKS

```bash
eksctl create cluster --name cdocker22 --without-nodegroup --region us-east-1 --zones us-east-1a,us-east-1b,us-east-1c --version 1.32 --profile cursosdev
```

### Crear nodos

```bash
eksctl create nodegroup --cluster cdocker22 --name cdocker22-nodegroup --node-type t3.medium --nodes 1 --nodes-min 1 --nodes-max 3 --asg-access --profile cursosdev --region us-east-1
```

### Crear IAM Provider

```bash
eksctl utils associate-iam-oidc-provider --cluster cdocker22 --approve --profile cursosdev --region us-east-1
```

### Descargar política para el cluster

```bash
curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.1.2/docs/install/iam_policy.json
```

### Crear la política

```bash
aws iam create-policy --policy-name AWSLoadBalancerPolicy_cdocker22 --policy-document file://iam_policy.json --profile cursosdev --region us-east-1
```

### Crear la cuenta de servicio para el cluster

```bash
eksctl create iamserviceaccount --cluster cdocker22 --namespace=kube-system --name=aws-lb-ms-cdocker22 --attach-policy-arn=arn:aws:iam::282865065290:policy/AWSLoadBalancerPolicy_cdocker22 --override-existing-serviceaccounts --approve --profile cursosdev --region us-east-1
```

### Verificar si existe el ingress controller del balancedor

```bash
kubectl get deploy alb-ingress-controller -n kube-system
```

### Instalar el target group binding

```bash
kubectl apply -k "github.com/aws/eks-charts/stable/aws-load-balancer-controller/crds?ref=master"
```

### Actualizar los repositorios de Helm

```bash
helm repo update
```

### Instalar ingress controller

```bash
helm upgrade -i aws-load-balancer-controller eks/aws-load-balancer-controller --set clusterName=cdocker22 --set serviceAccount.create=false --set serviceAccount.name=aws-lb-ms-cdocker22  -n kube-system
```

### Verificar que se haya instalado el ingress controller

```bash
kubectl get deploy aws-load-balancer-controller -n kube-system
```

### Crear repositorios de imágenes

- Ir a ECR y crear repositorios por cada imagen
- Usar las urls de los repositorios para crear el compose-aws.yaml

### Generar las imágenes con docker compose

```bash
docker compose -f compose-aws.yml build
```

### Vincular las cuentas de AWS y de Docker local

```bash
docker login -u AWS -p $(aws ecr get-login-password --region us-east-1 --profile cursosdev) 282865065290.dkr.ecr.us-east-1.amazonaws.com
```

### Publicar las imágenes locales en el ECR

```bash
docker compose -f compose-aws.yml push
```

### Registrar el cluster en el kubernetes local

```bash
aws eks update-kubeconfig --name cdocker22 --region us-east-1 --profile cursosdev
```
