# build env
FROM node:13.12.0-alpine as build
WORKDIR /react-calculator-docker-aws
COPY package*.json ./
RUN npm i
COPY . ./
RUN npm run build

# production env
FROM nginx:stable-alpine
COPY --from=build /react-calculator-docker-aws/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]