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


async function dbConnect(uri) {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB!');
      } catch (e) {
        console.error('Error connecting to MongoDB:', e);
    }
}

async function main(db_uri) {
    try {
        // Routing
        const authRouter = new AuthRouter("test_params_working");
        app.use('/api/v1', authRouter.router );

        await dbConnect(db_info.db_uri());
        
        app.listen(port, () => {
            console.log(`Running on localhost:${port} & Connection String = ${db_info.db_uri()}`)
        });
    }
    catch (e) {
        console.error('Error Booting Application:', e);
    }
}
// Running Application
main();

