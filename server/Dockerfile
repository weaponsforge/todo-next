# BASE PROFILE
FROM node:18.14.2-alpine as base
RUN mkdir -p /opt/server
WORKDIR /opt/server
RUN adduser -S server
RUN chown -R server /opt/server
COPY package*.json ./

# PRODUCTION PROFILE TARGET
FROM base as production
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force
COPY . .
USER server
EXPOSE 3001
CMD ["node", "src/index.js"]

# DEVELOPMENT PROFILE TARGET
FROM base as development
ENV NODE_ENV development
RUN npm install -g vercel@28.16.7
RUN npm install && npm cache clean --force
COPY . .
USER server
EXPOSE 3001
CMD ["npm", "run", "dev"]
