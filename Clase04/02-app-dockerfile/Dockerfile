FROM node:alpine3.23

RUN mkdir /app

# COPY ./package.json /app/package.json
# COPY ./package-lock.json /app/package-lock.json

# COPY ./package*.json /app/
# COPY ./ /app
COPY . /app

# RUN cd /app
# RUN npm install
RUN cd /app && npm install

# CMD ["node", "server.js"]
# CMD ["npm", "start"]

CMD ["node", "/app/server.js"]



