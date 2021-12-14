FROM node:alpine
WORKDIR /react-calculator-docker-aws
COPY package.json ./
COPY package-lock.json ./
RUN npm i
RUN npm i react-scripts
COPY ./ ./

CMD ["npm","run","start"]