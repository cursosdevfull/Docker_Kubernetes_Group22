# Contextos

### Crear un contexto

```bash
kubectl config set-context course22-ctx --user course22 --cluster docker-desktop
```

### Listar contextos

```bash
kubectl config view
```

### Visualizar el contexto actual

```bash
kubectl config current-context
```

### Cambiar de contexto

```bash
kubectl config use-context course22-ctx
```
