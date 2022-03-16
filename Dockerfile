FROM node:16

USER root

WORKDIR /home/node/app

COPY . .

EXPOSE 3000