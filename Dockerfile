FROM node:11-alpine as builder
RUN npm install -g typescript && \
  mkdir /tmp/src
COPY src /tmp/src/
COPY public /tmp/public/
COPY package.json tsconfig.json /tmp/
WORKDIR /tmp
RUN npm i && \
  npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /tmp/build/ /usr/share/nginx/html
