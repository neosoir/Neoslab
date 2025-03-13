FROM node:20

WORKDIR /cliente

# Pasar variables de entorno como ARG para Vite
ARG VITE_OLLAMA_API_URL
ARG VITE_OLLAMA_CONTEXT
ARG VITE_ALLOWED_HOSTS
ARG VITE_OLLAMA_USE_OPTIONS
ARG VITE_APP_URL

# Copiar archivos
COPY . .

# Instalar dependencias
RUN npm install

# Pasar variables al build de Vite
RUN VITE_OLLAMA_API_URL=$VITE_OLLAMA_API_URL \
    VITE_OLLAMA_CONTEXT=$VITE_OLLAMA_CONTEXT \
    VITE_ALLOWED_HOSTS=$VITE_ALLOWED_HOSTS \
    VITE_OLLAMA_USE_OPTIONS=$VITE_OLLAMA_USE_OPTIONS \
    VITE_APP_URL=$VITE_APP_URL \
    npm run build

# Instalar 'serve' para servir los archivos en producción
RUN npm install -g serve

# Exponer el puerto 3000
EXPOSE 3000

# Comando para servir el frontend
CMD ["serve", "-s", "dist", "--listen", "3000"]
