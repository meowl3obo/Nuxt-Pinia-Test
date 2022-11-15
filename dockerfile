FROM node:16-alpine AS builder

RUN mkdir -p /app
WORKDIR /app
COPY . .

RUN npm ci && npm cache clean --force
RUN npm run build

COPY ./.output /app/.output
ENTRYPOINT ["npm", "run", "start"]