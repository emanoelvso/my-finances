FROM node:12-alpine

WORKDIR /my-finances

EXPOSE 3000

COPY ["package.json", "./"]

RUN npm install --production

COPY . .

CMD ["node", "./src/server.js"]