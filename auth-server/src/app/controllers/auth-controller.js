const { response } = require("express");

// Manipulating DB
class AuthController {
    constructor(db_context) {
        this.db_context = db_context;
    }

    async register() {
        return 'Registered';
    }

    async login(req, res) {
        res.status(200).json({
            "JWT": "MockJWT",
            "TTL": new Date('10/05/23')
        });
    }
};

module.exports = {AuthController};