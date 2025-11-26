
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

COPY prisma ./prisma/

RUN npm ci

RUN npx prisma generate

COPY src ./src

RUN npm run build && ls -laR dist/

FROM node:20-alpine

RUN apk add --no-cache postgresql-client openssl openssl-dev

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci --only=production && npm cache clean --force

RUN npx prisma generate

COPY --from=builder /app/dist ./dist

COPY docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node", "dist/main.js"]
