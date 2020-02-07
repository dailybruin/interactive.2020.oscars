FROM node:8

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY index.js ./
COPY mongo ./mongo
COPY sslcert ./sslcert

EXPOSE 3000
CMD [ "node", "index.js" ]