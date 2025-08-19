FROM node:20-alpine

WORKDIR /app

# Install deps first for better caching
COPY app/package*.json ./
RUN npm install --omit=dev

# Copy source
COPY app/ .

EXPOSE 3000

CMD ["npm", "start"]
