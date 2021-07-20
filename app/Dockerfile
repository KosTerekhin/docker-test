FROM node:alpine as builder

WORKDIR '/app'

COPY ./app/package.json .
COPY ./app/yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx 
COPY --from=builder /app/build /usr/share/nginx/html
