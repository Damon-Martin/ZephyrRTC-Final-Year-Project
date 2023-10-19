FROM node:18
FROM ubuntu:20.04

# Working directory mapped to local file in the compose file
WORKDIR /usr/src/auth-server

COPY . .

RUN npm install

EXPOSE 3000

CMD chmod +x start.sh
ENTRYPOINT ["./start.sh"]