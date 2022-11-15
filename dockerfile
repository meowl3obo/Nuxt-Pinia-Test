FROM node:16-alpine AS builder

RUN mkdir -p /nuxt-app
WORKDIR /nuxt-app
COPY . .

RUN npm ci && npm cache clean --force
RUN npm run build