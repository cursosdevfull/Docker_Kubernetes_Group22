ARG NODE_VERSION=24

FROM node:${NODE_VERSION}-alpine AS stage-base
WORKDIR /app

FROM stage-base AS stage-deps-prod
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM stage-base AS stage-deps-dev
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci
COPY . .
RUN npm run build -- --configuration production

FROM nginx:alpine AS stage-prod
RUN apk add --no-cache curl
COPY --from=stage-deps-dev /app/dist/frontend/browser /usr/share/nginx/html
COPY --from=stage-deps-prod /app/node_modules /usr/share/nginx/html/node_modules
CMD ["nginx", "-g", "daemon off;"]





# COPY package*.json ./
# RUN npm install --omit=dev