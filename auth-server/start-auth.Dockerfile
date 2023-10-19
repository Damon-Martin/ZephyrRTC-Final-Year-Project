FROM node:18

# Working directory mapped to local file in the compose file
WORKDIR /usr/src/auth-server

COPY . .

RUN npm install

EXPOSE 3000

CMD ./start.sh