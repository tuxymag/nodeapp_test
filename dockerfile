FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./
RUN npm cache clean --force
RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "index.js" ]
