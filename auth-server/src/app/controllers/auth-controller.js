// Manipulating DB
class AuthController {
    constructor(db_context) {
        this.db_context = db_context;
    }

    async register() {
        return 'Registered';
    }

    async login(req, res) {
        response = await this.checkLoginInDB(req, res);
        return response;
    }

    // Returns response with corresponding status code. Body contains JWT if Successful.
    async checkLoginInDB(req, res) {
        try {
            if (true) {
                res.status(200).json({
                    "JWT": "MockJWT",
                    "TTL": new Date('10/05/23')
                });
                return res;
            }
            else{
                res.status(400);
                return res;
            }
        }
        catch {
            res.status(400);
            return res;
        }
        
        
    }
};

module.exports = {AuthController};