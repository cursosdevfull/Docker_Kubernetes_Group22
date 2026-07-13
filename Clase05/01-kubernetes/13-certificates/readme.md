# Certificados

### Certificado privado

```bash
openssl genrsa -out course22.key 2048
```

### Generar solicitud

```bash
openssl req -new -key course22.key -out course22.csr -subj "/CN=course22/O=developers"
MSYS_NO_PATHCONV=1 openssl req -new -key course22.key -out course22.csr -subj "/CN=course22/O=developers"
```

### Extraer la configuración del cluster docker-desktop

```bash
kubectl config view --raw -o jsonpath='{.clusters[0].cluster.certificate-authority-data}' | base64 --decode > k8s-ca.crt
```

### Convertir csr a base64

```bash
cat course22.csr | base64 | tr -d '\n'
```

### Generar el request

- Crear el manifiesto csr-request.yml
- Reemplazar el valor del campo request por el generado en el paso anterior

### Aplicar el manifiesto

```bash
kubectl apply -f csr-request.yml
```

### Aprobar la solicitud

```bash
kubectl certificate approve my-csr
```

### Descargar el certificado firmado (.crt)

```bash
kubectl get csr my-csr -o jsonpath='{.status.certificate}' | base64 --decode > course22.crt
```
