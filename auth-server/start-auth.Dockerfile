FROM node:18

# Working directory in the actual application
WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]