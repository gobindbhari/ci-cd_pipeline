FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm install -g typescript
RUN npm run build
RUN npm install -g pm2

CMD ["pm2-runtime", "start", "dist/index.js"]
# CMD ["pm2-runtime", "ecosystem.config.js"]
