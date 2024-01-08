const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const { AuthModels } = require('../models/auth-table');
const { TokenModels } = require('../models/tokens-table');


// Manipulating DB
class AuthController {

    async register(req, res) {
        try {
            const { username, password } = req.body;

            // Username Field Checks
            let isRegFieldsNull = username != null && password != null;
            let isRegFieldsEmpty = username.length != 0 && password.length != 0;

            if (isRegFieldsNull && isRegFieldsEmpty) {

                const regDb = new AuthModels({ username, password });
                await regDb.save();
                

                const token = jwt.sign({ username }, 'secret_key_9381', { expiresIn: '12h' });
                const TokenDb = new TokenModels({token});
                await TokenDb.save();

                res.status(200).json(`${token}`);
            }
            else {
                res.status(400).json(`Empty Username or Password`);
            }
        }
        catch (e) {
            res.status(400).json(`Wrong Login Schema or Mongoose Error: ${e}`);
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