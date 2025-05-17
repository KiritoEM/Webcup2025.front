FROM node:22-alpine AS dependencies 
WORKDIR /app
COPY package.json . 
RUN yarn


FROM dependencies as builder 
COPY --from=dependencies /app/node_modules/ ./node_modules
COPY src/ src/
COPY public/ public/
COPY .husky/ .husky/
COPY .lintstagedrc.json ./
COPY .npmrc ./
COPY components.json ./
COPY eslint.config.js ./
COPY index.html ./
COPY tsconfig.app.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
RUN yarn build


FROM nginx:stable-alpine as production
COPY --from=builder /app/dist /usr/share/nginx/html
