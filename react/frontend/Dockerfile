FROM node:alpine as BUILDER
WORKDIR '/app'
COPY ./package*.json ./
RUN npm install
COPY . .
run npm run build

FROM nginx
EXPOSE 80
COPY --from=BUILDER /app/build /usr/share/nginx/html

