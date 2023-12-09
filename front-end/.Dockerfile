FROM node:18
EXPOSE 3000

# Copying files to working directory inside container
WORKDIR /app
COPY . .

RUN npm install

CMD ["npm", "run", "dev"]