const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
  username: { type: String, required: true, unique: true }, // String is shorthand for {type: String}
  password: { type: String, required: true }
});


const AuthModels = mongoose.model('AuthData', AuthSchema, 'AuthData');

module.exports = {
  AuthModels
};