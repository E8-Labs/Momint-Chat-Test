const mongoose = require("../db/connection")

const Schema = new mongoose.Schema({
    last_message: {
        type: String,
        required: false,
    },
    users: Array,
},
{timestamps: true}
)

const Chat = new mongoose.model('Chats', Schema)

module.exports = Chat