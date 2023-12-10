// Manipulating DB
class AuthController {
    constructor(db_context) {
        this.db_context = db_context;
    }

    register() {
        return 'Registered';
    }

    login() {
        return `User Logged In`;
    }
};

module.exports = {AuthController};