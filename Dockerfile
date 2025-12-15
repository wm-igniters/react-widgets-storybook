FROM node:18.19.0 AS builder

WORKDIR /app

RUN npm install -g npm@10.2.3

RUN npm install -g @angular/cli

COPY package.json package-lock.json ./

RUN npm install

RUN npm install @storybook/addons @storybook/api --save-dev

COPY . .

RUN npm run build-storybook

FROM nginx:latest

COPY --from=builder /app/storybook-static /usr/share/nginx/html/storybook-static

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
