FROM node:14

WORKDIR /app-b

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]
