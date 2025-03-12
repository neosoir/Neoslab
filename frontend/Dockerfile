FROM node:20

WORKDIR /cliente

COPY . .

RUN npm install

RUN npm run build

# Instalar 'serve' para servir los archivos en producción
RUN npm install -g serve

# Exponer el puerto 3000
EXPOSE 3000

# Comando para servir el frontend
CMD ["serve", "-s", "dist", "-l", "0.0.0.0:3000"]

