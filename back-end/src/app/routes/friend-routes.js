const express = require('express');

class FriendRoutes {
    constructor(db_context) {
        this.db_context = db_context; // pass this to the controllers
        this.router = express.Router();

        // Instantiating Controllers
        //let friendController = new FriendController(db_context);

        // Mapping Endpoints to Controller functions
        this.router.get('/friend-list', async (req, res) => {
            try {
                await res.status(200).send('Friend List Sent')
            } 
            catch (e) {
                console.error(e);
                res.status(500).send({ e: 'Internal Server Error' });
            }
        });
    }
}

module.exports = {FriendRoutes};