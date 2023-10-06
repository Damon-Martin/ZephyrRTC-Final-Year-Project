FROM node:18

# Making an app directory
WORKDIR /app

# Copies the source code for the web app
COPY . .

# Default port is 8080
# Will use Port Maping with Docker with NGINX for load balancing
EXPOSE 3000

# Command: 'npm start build'
CMD ["npm","start"]