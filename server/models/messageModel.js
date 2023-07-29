const mongoose = require("../db/connection")

const Schema = new mongoose.Schema({
    message: {
        type: String,
        required: false,
    },
    
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",

    },
    
},
{ timestamps: true }
)

const Message = new mongoose.model('Messages', Schema)

module.exports = Message