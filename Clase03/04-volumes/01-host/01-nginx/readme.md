# Volumen Host

### Con ruta absoluta

```sh
docker run -d \
    --name serverweb \
    -p 3000:80 \
    -v D://Cursos//Docker//Docker_Kubernetes_Group22//Clase03//04-volumes//01-host//www:/usr/share/nginx/html \
    nginx:alpine
```

### Con ruta relativa (Git Bash)

```sh
docker run -d \
    --name serverweb \
    -p 3000:80 \
    -v $(pwd -W)/www:/usr/share/nginx/html \
    nginx:alpine
```

### Con ruta relativa (PowerShell)

```sh
docker run -d `
    --name serverweb `
    -p 3000:80 `
    -v ${PWD}/www:/usr/share/nginx/html `
    nginx:alpine
```
