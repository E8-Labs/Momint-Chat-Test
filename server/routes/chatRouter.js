const express = require("express");
const Router = express.Router();
const {verifyJwtToken} = require("../middleware/jwtmiddleware");

const {Chat, LoadMessages, LoadChats} = require("../controllers/ChatController")

Router.post('/chat', verifyJwtToken, Chat)
Router.post('/chat_list', verifyJwtToken, LoadChats)
Router.get("/messages_for_chat", verifyJwtToken, LoadMessages)
//message_list_for_a_chat below

module.exports = Router;