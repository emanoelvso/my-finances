FROM node:12-alpine

ENV HOME=/home/app

WORKDIR $HOME/my-finances

COPY package.json package-lock.json $HOME/my-finances/

RUN npm install --production --silent --progress=false

COPY . .

EXPOSE 3000

CMD ["npm", "start"]