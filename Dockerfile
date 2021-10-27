# Stage 1

FROM node:14-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install --no-package-lock

COPY . /app

RUN npm run build --prod


# Stage 2

FROM nginx:1.21.3-alpine

COPY --from=build-step /app/dist/front-end /usr/share/nginx/html