# Pods

### Crear un pod

```bash
kubectl run server-web --image=nginx:alpine
```

### Listar pods

```bash
kubectl get pods
kubectl get po
```

### Port forward

```bash
kubectl port-forward <nombre del pod> <puerto host>:<puerto contenedor>
```

### Ejecutar manifiesto

```bash
kubectl apply -f <ruta y nombre del manifiesto>
```

### Eliminar un pod

```bash
kubectl delete po <nombre del pod>
```

### Eliminar un pod desde el manifiesto

```bash
kubectl delete -f <ruta y nombre del manifiesto>
```
