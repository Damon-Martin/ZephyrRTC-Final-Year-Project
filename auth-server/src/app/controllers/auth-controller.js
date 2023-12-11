const mongoose = require('mongoose');
const { AuthSchema } = require('../models/auth-table');

// Manipulating DB
class AuthController {
    constructor(db_context) {
        this.db_context = db_context;
        this.RegistrationModel = mongoose.model('AuthTable', AuthSchema)
    }

    async register(req, res) {
        
        let registerUser = new this.RegistrationModel({
            username: "test@email.com",
            password: "strong_pass",
            accessToken: "mockJWT",
            tokenTTL: Date.now(),
        });

        res.status(200).json(registerUser.toJSON());
    }

    async login(req, res) {
        res.status(200).json({
            "JWT": "MockJWT",
            "TTL": new Date('10/05/23')
        });
    }
};

module.exports = {AuthController};