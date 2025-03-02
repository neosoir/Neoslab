# Neos Lab

## Cerbot:

### Standalone (use port 80)

```
sudo apt install certbot
sudo certbot certonly --standalone -d example.com -d www.example.com
```

sudo certbot certificates

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