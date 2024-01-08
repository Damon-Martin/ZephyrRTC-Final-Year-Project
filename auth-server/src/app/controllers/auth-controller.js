const mongoose = require('mongoose');
const AuthModel = require('../models/auth-table')
const { AuthSchema } = require('../models/auth-table');

// Manipulating DB
class AuthController {

    async register(req, res) {
        try {
            if (req.body.username != null) {
                res.status(200).json(`There is a username ${req.body.username}`);
            }
        }
        catch (e) {
            res.status(400).json(`Wrong Login Schema in POST REQ most likely`);
        }
        
    }

    async login(req, res) {
        res.status(200).json({
            "JWT": "MockJWT",
            "TTL": new Date('10/05/23')
        });
    }
};

module.exports = {AuthController};