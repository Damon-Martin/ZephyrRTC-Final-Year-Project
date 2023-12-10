const express = require('express');
const { AuthController } = require('../controllers/auth-controller');

class AuthRouter {
    constructor(db_context) {
        this.db_context = db_context; // pass this to the controllers
        this.router = express.Router();

        // Instantiating Controllers
        let authController = new AuthController(db_context);

        // Mapping Endpoints to Controller functions
        this.router.post('/register', (req, res) => {
            res.send( authController.register() );
        });

        this.router.get('/login', (req, res) => {
            res.send( authController.login() );
        });
    }
}

module.exports = {AuthRouter};