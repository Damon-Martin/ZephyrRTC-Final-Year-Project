import mongoose from 'mongoose';
const { Schema } = mongoose;

const AuthSchema = new Schema({
  username: String, // String is shorthand for {type: String}
  password: String,
  accessToken: String,
  tokenTTL: {type: Date},
  registrationDate: { type: Date, default: Date.now },
});

module.exports(
    AuthSchema
);