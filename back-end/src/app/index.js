// This is micro-service is for passing chats, friend lists all as json. It's rendered on the next js server side.
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const { FriendRoutes }  = require('../app/routes/friend-routes');

// MongoDB Details
const db_info = {
  db_name: 'MainDB',
  db_username: 'RegEmployee',
  db_pass: 'strong_password',
  db_uri: function () {
    return `mongodb://${this.db_username}:${this.db_pass}@mongo-db:27017/${this.db_name}`;
  }
};

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
};

async function connectDb() {
  try {
    await mongoose.connect(db_info.db_uri());
    console.log('Connected to MongoDB'); // It must be connected as it hasn't thrown an error

    // Mapping Routing Files
    const friendRoutes = new FriendRoutes("test_params_working");
    app.use('/api/v1', friendRoutes.router);

    // Handling Disconnections Recursively
    mongoose.connection.on('disconnected', resolveConnection);
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
    resolveConnection();
  }
};

async function main() {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`Running on localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start the application:', error);
  }
};

// Running Main Back-End Server
main();