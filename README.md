# Neos Lab

## Cerbot:
Standalone (use port 80)

```
# Install cerificates
sudo apt install certbot
sudo certbot certonly --standalone -d example.com -d www.example.com

# Check current certificates
sudo certbot certificates
```

### Cerbot dir

```
/etc/letsencrypt/
├── live/
│   └── tudominio.com/
│       ├── cert.pem         # Certificado
│       ├── chain.pem        # Cadena de certificados
│       ├── fullchain.pem    # Certificado completo (cert + cadena)
│       ├── privkey.pem      # Clave privada
├── archive/
└── renewal/

```

## Architecture

```


                 +-------------------+
                 |  Cliente (Web/App) |
                 +-------------------+
                          |
                          v
                 +------------------+
                 |  Proxy Inverso    |
                 |      (Nginx)      |
                 +------------------+
                          |
    +---------------------+---------------------+
    |                     |                     |
    v                     v                     v
+-------------+     +-------------+     +----------------+
| Node Frontend |  |   PHP API    |     |  Ollama API    |
+-------------+     +-------------+     +----------------+

```