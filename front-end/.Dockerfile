FROM node:18

# Installing Packages
COPY package*.json ./
RUN npm install

EXPOSE 3000

COPY . .

CMD ["npm", "run", "dev"]