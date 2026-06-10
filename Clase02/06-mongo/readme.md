# MongoDB

### Server

```sh
docker run -d \
    --name mongo-server \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
	-e MONGO_INITDB_ROOT_PASSWORD=secret \
    -p 27017:27017 \
    mongo:8.3.2-noble
```

### Client

```sh
docker run -d \
    --name mongo-client \
    -e ME_CONFIG_MONGODB_URL=mongodb://mongoadmin:secret@172.17.0.7:27017/ \
    -e ME_CONFIG_BASICAUTH_ENABLED=true \
    -e ME_CONFIG_BASICAUTH_USERNAME=mongoexpressuser \
    -e ME_CONFIG_BASICAUTH_PASSWORD=mongoexpresspass \
    -p 8081:8081 \
    mongo-express
```

```sh
docker run -d \
    --name mongo-client-db-gate \
    -p 3000:3000 \
    dbgate/dbgate:alpine
```
