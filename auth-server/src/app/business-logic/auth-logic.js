const mongoose = require('mongoose');

class AuthLogic {
    constructor() {
        console.log("test");
    }
    async issueJWT() {
        return null
    }

    isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
}

module.exports = {
    AuthLogic
}