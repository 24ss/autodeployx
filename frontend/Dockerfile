# Stage 1 - Build the Vite React app
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2 - Serve it using nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html