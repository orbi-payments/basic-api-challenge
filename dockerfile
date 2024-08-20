# Utiliza una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y el archivo de bloqueos de dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Expone el puerto en el que la aplicación estará escuchando
EXPOSE 3000

# Comando por defecto que se ejecutará al iniciar el contenedor
CMD ["npm", "run", "start:dev"]
