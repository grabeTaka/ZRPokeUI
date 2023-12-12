FROM node:18.3.0-alpine3.14


WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]