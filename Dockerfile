FROM node:20-alpine
WORKDIR /app
COPY . /app
COPY package*.json ./
RUN npm install 
COPY . .
ENV MONGO_USERNAME=gokul
ENV MONGO_PASSWORD=root123
CMD ["node", "server.js"]