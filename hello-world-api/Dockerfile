# Usar a imagem oficial do Node.js
FROM node:alpine

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Expor a porta que a aplicação vai rodar - config/.env
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["node", "app.js"]