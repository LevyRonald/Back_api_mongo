FROM node:14-alpine

USER root

WORKDIR /home/node/app

COPY . .

EXPOSE 3000