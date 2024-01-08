const express = require('express');
const mongoose = require('mongoose');
const { AuthRouter } = require('./routes/auth-router');

const app = express();
const port = 3000;

// MongoDB Details
const db_info = {
  db_name: 'AuthDB',
  db_username: 'ImportantAdmin',
  db_pass: 'very_strong_password',
  db_uri: function () {
    return `mongodb://${this.db_username}:${this.db_pass}@mongo-db:27017/${this.db_name}`;
  }
}

async function resolveConnection() {
  try {
    // Removing Listeners and connections to prevent a stack overflow crashing the app
    mongoose.connection.removeListener('disconnected', resolveConnection);
    await mongoose.connection.close();
    console.log('Disconnected from MongoDB. Reconnecting...');
    await connectDb();
  } 
  catch (e) {
    console.error('Error resolving connections completely:', e);
  }
}

async function connectDb() {
  try {
    await mongoose.connect(db_info.db_uri());
    console.log('Connected to MongoDB'); // It must be connected as it hasn't thrown an error

    // Mapping Routing Files
    const authRouter = new AuthRouter("test_params_working");
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/v1', authRouter.router);
    
    // Handling Disconnections Recursively
    mongoose.connection.on('disconnected', resolveConnection);
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
    resolveConnection();
  }
}

async function main() {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`Running on localhost:${port}`)
    });
  } catch (error) {
    console.error('Failed to start the application:', error);
  }
}

// Running Auth Server
main();