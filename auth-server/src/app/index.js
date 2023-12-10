const express = require('express');
const mongoose = require('mongoose');
const { AuthRouter } = require('./routes/auth-router');


const app = express();
const port = 3000;

const db_user = 'root';
const db_pass = 'strong_password';
const db_name = 'admin';

// MongoDB URI
const db_uri = `mongodb://${db_user}:${db_pass}@mongo-db:27017/${db_name}`;

// Routing
const authRouter = new AuthRouter("test_params_working");
app.use('/api/v1', authRouter.router );

app.listen(port, () => {
  console.log(`Running on localhost:${port}`)
})