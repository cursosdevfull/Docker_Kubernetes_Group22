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

### Generar certificado final

```bash
openssl x509 -req -in course22.csr -CA \\wsl.localhost\docker-desktop\tmp\docker-desktop-root\run\config\pki\ca.crt -CAkey \\wsl.localhost\docker-desktop\tmp\docker-desktop-root\run\config\pki\ca.key -CAcreateserial -out course22.crt --days 365
```

openssl x509 -req -in course22.csr -CA \\wsl$\docker-desktop\mnt\host\c\ProgramData\DockerDesktop\pki\ca.crt -CAkey \\wsl$\docker-desktop\mnt\host\c\ProgramData\DockerDesktop\pki\ca.key -CAcreateserial -out course22.crt --days 365
