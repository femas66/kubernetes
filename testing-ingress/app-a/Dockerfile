FROM node:14

WORKDIR /app-a

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]
