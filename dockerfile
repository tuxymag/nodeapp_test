FROM node:latest

WORKDIR /usr/src/app

RUN npm install --save @opentelemetry/api
RUN npm install --save @opentelemetry/sdk-trace-node
RUN npm install --save @opentelemetry/instrumentation-http
RUN npm install --save @opentelemetry/exporter-jaeger
RUN npm install --save @opentelemetry/resources
RUN npm install --save opentelemetry-instrumentation-express

COPY package.json ./


RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "index.js" ]
