FROM node:alpine as builder
WORKDIR /app

COPY package.json ./
RUN npm install --force

COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "start"]