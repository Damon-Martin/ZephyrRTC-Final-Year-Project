const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const { AuthModels } = require('../models/auth-table');
const { TokenModels } = require('../models/tokens-table');

const secret_signing_key = `81N*(LMsjns":123213]{]1231231skKKmsx}`;

// Manipulating DB
class AuthController {

    // Adds user + pass to auth collection and makes a token into token db. Also, sent to user.
    async register(req, res) {
        try {
            const { username, password } = req.body;

            // Username Field Checks
            let isRegFieldsNull = username != null && password != null;
            let isRegFieldsEmpty = username.length != 0 && password.length != 0;

            if (isRegFieldsNull && isRegFieldsEmpty) {

                const regDb = new AuthModels({ username, password });
                await regDb.save();
                

                const token = jwt.sign({ username }, secret_signing_key, { algorithm: 'HS256', expiresIn: '12h' });
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

    // Based on username + password. Return token if good or bad.
    async login(req, res) {
        try {
            const { username, password } = req.body;

            const userObj = await AuthModels.findOne({ "username": username }).exec();
            
            // User exists
            if (userObj) {
                // Checking Password
                if (password === userObj.password) {
                    // Issue new token
                    const token = jwt.sign({ username }, secret_signing_key, { algorithm: 'HS256', expiresIn: '12h' });
                    const TokenDb = new TokenModels({token});
                    await TokenDb.save();

                    // Token Returned with Username
                    res.status(200).json(token);
                }
                // Wrong Password
                else {
                    res.status(401).json({error: "Username or Password is Incorrect"});
                }
            } 
            // User Doesn't Exist
            else {
                res.status(401).json({error: "Username or Password is Incorrect"});
            }
        } 
        // Complete Failure: Mongoose
        catch (e) {
            res.status(500).json(`Error: Mongoose Completely Failed ${e.message}`);
        }
    }

    // User gives token to Backend. Token given to Auth Server. This Validates its authentic. Informs Server.
    // No Info given to client
    async isTokenValid(req, res) {
        try {
            const { givenToken } = req.body;

            const tokenDB = await TokenModels.findOne({ "token": givenToken }).exec();
            if (tokenDB) {

            }
            else {

            }
        }
        catch (e) {

        }
        // Recieves Token
        // Validates Signature with satus code 200

        // Check if token exists

        // Check Signature

        // Check 'iat' or 'exp' are different

        // Check if expired

    }
};

module.exports = {AuthController};