FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .
COPY yarn.lock .
RUN npm install
COPY . .
RUN npm run build:docker

FROM nginx 
COPY --from=builder /app/app/build /usr/share/nginx/html
