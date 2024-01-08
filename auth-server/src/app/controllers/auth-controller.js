const mongoose = require('mongoose');
const AuthModel = require('../models/auth-table')
const { AuthSchema } = require('../models/auth-table');

// Manipulating DB
class AuthController {

    async register(req, res) {
        try {
            const { username, password } = req.body;

            // Username Field Checks
            let isRegFieldsNull = username != null && password != null;
            let isRegFieldsEmpty = username.length != 0 && password.length != 0;

            if (isRegFieldsNull && isRegFieldsEmpty) {
                res.status(200).json(`There is a username ${username} ${password}`);
            }
            else {
                res.status(400).json(`Empty Username or Password`);
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