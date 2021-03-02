
ARG PORT=3030

FROM node:12-alpine

ENV PORT=3030

LABEL autor1="Mauricio"
LABEL autor2="Edgar"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD [ "node", "server.js" ]