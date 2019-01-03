FROM node:11-alpine as builder
RUN npm install -g typescript @angular/cli && \
  mkdir /tmp/src
COPY src /tmp/src/
COPY package.json tsconfig.json tslint.json angular.json /tmp/
WORKDIR /tmp
RUN npm i && \
  ng build --prod

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /tmp/dist/movie-recommendation/ /usr/share/nginx/html