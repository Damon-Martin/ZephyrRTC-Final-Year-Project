const express = require('express');
const { AuthController } = require('../controllers/auth-controller');

class AuthRouter {
    constructor(db_context) {
        this.db_context = db_context; // pass this to the controllers
        this.router = express.Router();

        // Instantiating Controllers
        let authController = new AuthController(db_context);

        // Mapping Endpoints to Controller functions
        this.router.post('/register', async (req, res) => {
            res.send( authController.register(req, res) );
        });

        this.router.get('/login', async (req, res) => {
            const response = await authController.login(req, res); // Passing request header and body
            res.send( response );
        });
    }
}

module.exports = {AuthRouter};