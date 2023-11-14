# Dockerfile

# Utiliza una imagen de Node.js como base
FROM node:18

# Crea el directorio de la aplicación
WORKDIR /src

# Copia los archivos de configuración y de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos de la aplicación
COPY . .

# Compila TypeScript
RUN npm run build

# Expone el puerto 4000
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["node", "dist/index.js"]