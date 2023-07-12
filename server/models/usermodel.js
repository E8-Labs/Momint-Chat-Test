const mongoose = require("../db/connection");
const Schema = new mongoose.Schema({
    name: {required: true, minLength: 3, maxLength: 50, type: String},
    username: {required: true, minLength: 3, maxLength: 50, type: String},
    email: {required: true, minLength: 3, maxLength: 50, type: String},
    password: {required: true, minLength: 6, maxLength: 800, type: String},
    image_url: {type: String}
})

const User = new mongoose.model('users', Schema);
module.exports = User;