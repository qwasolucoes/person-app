FROM node:14-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install

EXPOSE 4200

COPY . /app

CMD ["run", "start-docker"]
ENTRYPOINT [ "npm" ]