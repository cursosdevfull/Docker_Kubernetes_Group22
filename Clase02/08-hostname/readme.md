# Hostname

```sh
docker run -d --name webserver --hostname server.local nginx:alpine
docker run -d --name webserver nginx:alpine
```

### Cluster Rabbitmq

```sh
# 1. Crear una red para el cluster
docker network create rabbitmq-cluster

# 2. Levantar el Nodo 1 (primer nodo, no se une a ningún cluster existente)
#    IMPORTANTE: Todos los nodos deben compartir la misma Erlang Cookie (RABBITMQ_ERLANG_COOKIE)
#    para que la comunicación inter-nodo funcione correctamente.
docker run -d --name rabbitmq-node1 --hostname rabbitmq-node1 --network rabbitmq-cluster -p 15672:15672 -p 5672:5672 -e RABBITMQ_ERLANG_COOKIE=mi-cookie-secreto rabbitmq:3-management

# 3. Esperar unos segundos a que el nodo 1 esté listo
sleep 15

# 4. Levantar el Nodo 2 y unirlo al cluster
docker run -d --name rabbitmq-node2 --hostname rabbitmq-node2 --network rabbitmq-cluster -p 15673:15672 -p 5673:5672 -e RABBITMQ_ERLANG_COOKIE=mi-cookie-secreto rabbitmq:3-management
docker exec rabbitmq-node2 rabbitmqctl stop_app
docker exec rabbitmq-node2 rabbitmqctl reset
docker exec rabbitmq-node2 rabbitmqctl join_cluster rabbit@rabbitmq-node1
docker exec rabbitmq-node2 rabbitmqctl start_app

# 5. Levantar el Nodo 3 y unirlo al cluster
docker run -d --name rabbitmq-node3 --hostname rabbitmq-node3 --network rabbitmq-cluster -p 15674:15672 -p 5674:5672 -e RABBITMQ_ERLANG_COOKIE=mi-cookie-secreto rabbitmq:3-management
docker exec rabbitmq-node3 rabbitmqctl stop_app
docker exec rabbitmq-node3 rabbitmqctl reset
docker exec rabbitmq-node3 rabbitmqctl join_cluster rabbit@rabbitmq-node1
docker exec rabbitmq-node3 rabbitmqctl start_app

# 6. Verificar el estado del cluster
docker exec rabbitmq-node1 rabbitmqctl cluster_status
```
