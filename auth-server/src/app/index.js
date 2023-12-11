const express = require('express');
const mongoose = require('mongoose');
const { AuthRouter } = require('./routes/auth-router');

const app = express();
const port = 3000;

// MongoDB Details
const db_info = {
    db_name: 'admin',
    db_username: 'root',
    db_pass: 'strong_password',
    db_uri: function () {
        return `mongodb://${this.db_username}:${this.db_pass}@mongo-db:27017/${this.db_name}`;
    }
}


async function main(db_uri) {
    try {
        // Routing
        const authRouter = new AuthRouter("test_params_working");
        app.use('/api/v1', authRouter.router );

        app.listen(port, () => {
            console.log(`Running on localhost:${port} & Connection String = ${db_info.db_uri()}`)
        });
    }
    catch (e) {
        console.error(e);
    }
}
// Running Application
main();

