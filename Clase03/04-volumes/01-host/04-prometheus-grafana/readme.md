# Prometheus y Grafana

### Crear una red

```sh
docker network create net-prom-graf -d bridge
```

### Contenedor de Prometheus

```sh
docker run -d \
    --name prometheus \
    -p 9090:9090 \
    -v $(pwd -W)/prometheus-data:/prometheus \
    -v $(pwd -W)/prometheus.yml:/etc/prometheus/prometheus.yml \
    --network net-prom-graf \
    prom/prometheus
```

### Contenedor de Grafana

```sh
docker run -d \
    --name grafana \
    -p 3000:3000 \
    -v $(pwd -W)/grafana-data:/var/lib/grafana \
    --network net-prom-graf \
    grafana/grafana
```
