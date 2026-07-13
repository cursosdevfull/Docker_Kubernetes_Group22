# Registry

### Crear el contenedor de imágenes

```bash
docker run -d -p 5000:5000 --restart always --name registry registry:3
```

### Para listar los repositorios

```bash
curl http://localhost:5000/v2/_catalog
```
