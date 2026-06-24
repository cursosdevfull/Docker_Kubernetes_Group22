# Segregación

### Requerimientos

- Backend01 se comunica con Backend02
- Backend01 se comunica con Backend03
- Backend02 y Backend03 no se ven
- Backend02 se comunica con Database
- Backend03 se comunica con Database

### Networks

```sh
docker network create net-01 -d bridge
docker network create net-02 -d bridge
docker network create net-03 -d bridge
docker network create net-04 -d bridge
```

### Contenedores

```sh
docker run -d --name backend01 --network net-01 --network net-02 nginx:alpine
docker run -d --name backend02 --network net-01 --network net-03 nginx:alpine
docker run -d --name backend03 --network net-02 --network net-04 nginx:alpine
docker run -d --name database --network net-03 --network net-04 nginx:alpine
```
