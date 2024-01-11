const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const { AuthModels } = require('../models/auth-table');
const { TokenModels } = require('../models/tokens-table');

const secret_signing_key = `81N*(LMsjns":123213]{]1231231skKKmsx}`;
const roundsOfSalting = 11;

// Manipulating DB
class AuthController {

    // Adds user + pass to auth collection and makes a token into token db. Also, sent to user.
    async register(req, res) {
        try {
            const uName = req.body.username;
            const pass = req.body.password;

            // Username Field Checks
            let isRegFieldsNull = uName != null && pass != null;
            let isRegFieldsEmpty = uName.length != 0 && pass.length != 0;

            if (isRegFieldsNull && isRegFieldsEmpty) {

                const regDb = new AuthModels({ username: uName, password: pass });
                await regDb.save();
                

                const token = jwt.sign({ uName }, secret_signing_key, { algorithm: 'HS256', expiresIn: '12h' });
                const TokenDb = new TokenModels({token});
                await TokenDb.save();

                res.status(200).json({token: token});
            }
            else {
                res.status(400).json(`Empty Username or pass`);
            }
        }
        catch (e) {
            res.status(400).json(`Wrong Login Schema or Mongoose Error: ${e}`);
        }
        
    }

    // Based on username + pass. Return token if good or bad.
    async login(req, res) {
        try {
            const uName = req.body.username;
            const pass = req.body.password;
            const rememberMe = req.body.rememberMe; // true or false

            const userObj = await AuthModels.findOne({ "username": uName }).exec();
            
            // User exists
            if (userObj) {
                // Checking pass
                if (pass === userObj.password) {
                    
                    // Short Expiry Date
                    let token = jwt.sign({ uName }, secret_signing_key, { algorithm: 'HS256', expiresIn: '1m' });
                    
                    // Long Expiry Date
                    if (rememberMe === true) {
                        token = jwt.sign({ uName }, secret_signing_key, { algorithm: 'HS256', expiresIn: '12h' });
                    } 
                    
                    const TokenDb = new TokenModels({token});
                    await TokenDb.save();

                    // Token Returned with Username
                    res.status(200).json({token: token});
                }
                // Wrong pass
                else {
                    res.status(401).json({Error: "Username or password is Incorrect"});
                }
            } 
            // User Doesn't Exist
            else {
                res.status(401).json({ Error: "Username or password is Incorrect"});
            }
        } 
        // Complete Failure: Mongoose
        catch (e) {
            res.status(500).json({ Error: "Mongoose Completely Failed ${e.message}"});
        }
    }

    // User gives token to Backend. Token given to Auth Server. This Validates its authentic. Informs Server.
    // No Info given to client
    async isTokenValid(req, res) {
        try {
            jwt.verify(req.body.token, secret_signing_key)
            res.status(200).json({ token: req.body.token });
        }
        catch {
            res.status(401).json({ Error: "Token Invalid: Please Re-Login" })
        }
    }
};

module.exports = {AuthController};