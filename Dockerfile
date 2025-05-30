FROM node:20-alpine

WORKDIR /app

COPY . .

EXPOSE 8888

ENTRYPOINT ["node", "app.js"]