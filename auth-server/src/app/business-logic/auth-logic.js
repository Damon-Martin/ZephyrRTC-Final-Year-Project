const mongoose = require('mongoose');

class AuthLogic {
    constructor() {
        console.log("test");
    }
    async issueJWT() {
        return null
    }

    async isValidEmail(email) {
        return null;
    }
}

module.exports = {
    AuthLogic
}