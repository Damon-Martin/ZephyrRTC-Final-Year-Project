const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
  username: String, // String is shorthand for {type: String}
  password: String,
  accessToken: String,
  tokenTTL: {type: Date},
  registrationDate: { type: Date, default: Date.now },
});

module.exports = {
  AuthSchema
};