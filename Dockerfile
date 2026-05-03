FROM node:22-bookworm

WORKDIR /app

COPY . .

ENV CI=true

RUN npm ci

RUN npx -y playwright install chrome --with-deps

CMD ["npm", "run", "test"]