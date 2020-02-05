FROM node:8

WORKDIR /
RUN mkdir /app

ADD package.json app
ADD index.js app
ADD mongo app

RUN cd /app; npm install

EXPOSE 8080
CMD ["npm", "dev"]