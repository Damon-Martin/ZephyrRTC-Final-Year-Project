# Working Directory: Defined in the Docker Compose file
FROM node:20
EXPOSE 3000

# Copying files to working directory inside container
WORKDIR /app
COPY . .

# Installing Packages
RUN npm install

CMD ["npm", "run", "start"]