FROM node:18.16.0 AS builder

LABEL maintainer="dmitriy@borodin.site"

WORKDIR /tmp

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY ./ ./

RUN yarn build

FROM nginx:alpine

COPY --from=builder /tmp/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
