FROM node:10.4.0-alpine

WORKDIR /app

COPY . .

RUN npm install
