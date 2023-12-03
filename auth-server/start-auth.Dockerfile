# Working Directory: Defined in the Docker Compose file
FROM node:18

# Installing Packages
COPY package*.json ./
RUN npm install

EXPOSE 3000

COPY . .

RUN npm install

CMD ["npm", "run", "start"]