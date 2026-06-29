FROM node:alpine3.23

WORKDIR /app

# COPY package.json package-lock.json ./
COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]