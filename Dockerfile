# specify the node base image with your desired version node:<version>
FROM node:10
WORKDIR /usr/src/app
# replace this with your application's default port
COPY package.json .
RUN npm install
COPY . .
CMD node index.js
EXPOSE 3003




