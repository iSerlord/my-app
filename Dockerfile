FROM node:current-alpine

LABEL authors="@allblue20"

WORKDIR  /my-app

COPY package*.json .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
