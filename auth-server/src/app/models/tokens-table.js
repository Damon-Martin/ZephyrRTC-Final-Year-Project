const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// We need to periodically check the tokens are still valid
// If not delete it
const TokenSchema = new Schema({
    token: { type: String, required: true}
});

const TokenModels = mongoose.model('TokenSchema', TokenSchema, 'TokenSchema');

module.exports = {
    TokenModels
};