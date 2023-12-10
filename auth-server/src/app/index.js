const express = require('express');
const mongoose = require('mongoose');
const { AuthRouter } = require('./routes/auth-router');

const app = express();
const port = 3000;

const db_info = {
  db_name: 'admin',
  db_username: 'root',
  db_pass: 'strong_password',
}

// MongoDB URI
const db_uri = `mongodb://${db_info.db_username}:${db_info.db_pass}@mongo-db:27017/${db_info.db_name}`;

// Routing
const authRouter = new AuthRouter("test_params_working");
app.use('/api/v1', authRouter.router );

app.listen(port, () => {
  console.log(`Running on localhost:${port}`)
})