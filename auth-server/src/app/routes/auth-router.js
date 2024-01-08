const express = require('express');
const { AuthController } = require('../controllers/auth-controller');

class AuthRouter {
    constructor() {
        this.router = express.Router();
        
        // Instantiating Controllers
        let authController = new AuthController();

        // Mapping Endpoints to Controller functions
        this.router.post('/register', async (req, res) => {
            try {
                await authController.register(req, res);
            } 
            catch (e) {
                console.error(e);
                res.status(500).send({ e: 'Internal Server Error' });
            }
        });

        this.router.get('/login', async (req, res) => {
            try {
                await authController.login(req, res);
            } 
            catch (e) {
                console.error(e);
                res.status(500).send({ e: 'Internal Server Error' });
            }
        });
    }
}

module.exports = {AuthRouter};