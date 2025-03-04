# Usa la imagen base oficial de NGINX
FROM nginx:1.27

# Actualiza el sistema e instala nano
RUN apt-get update && apt-get install -y nano && apt-get clean && rm -rf /var/lib/apt/lists/*

# Establecer el directorio de trabajo
WORKDIR /usr/share/nginx/html

# Copiar los archivos de la aplicación al contenedor
COPY ./Docker/server.conf /usr/share/nginx/html/server.conf

# Declarar argumentos de construcción
ARG PRIMARY_DOMAIN
ARG SECONDARY_DOMAIN
ARG APP_ENV

# Reemplazar las variables de entorno si APP_ENV es production
RUN if [ "$APP_ENV" = "production" ]; then \
    envsubst '${PRIMARY_DOMAIN} ${SECONDARY_DOMAIN}' < /usr/share/nginx/html/server.conf > /etc/nginx/conf.d/default.conf; \
    fi

# Exponer los puertos 80 y 443 para el servidor
EXPOSE 80 443

# Comando predeterminado para ejecutar NGINX
CMD ["nginx", "-g", "daemon off;"]
