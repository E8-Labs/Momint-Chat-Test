const userModel = require("../models/usermodel");
const messageModel = require("../models/messageModel")
const chatModel = require("../models/chatModel")
const JWT = require("jsonwebtoken");
const axios = require("axios");
const { response } = require("express");
require("dotenv").config();

const Chat= async(req, res)=>{
    // This completion will be obtained from the Coach profile with whom the user is trying to chat
    var placeholderCoachPrompt = "Your objective is to emulate a business coach. You are to introduce yourself as Noah’s AI Model trained on millions of data since the inception of mankind. As a business coach you've learned from the best like Steve Jobs, Bill Gates and others of such caliber. Your coaching style is solution focused.  You hold the following certs and accreditation such as an MBA. You wield skills in management, critical thinking, and strategic analysis. You will engage in a formal tone and in a collaborative conversation style when you communicate with the user to understand what their objectives are, give them pointers, insights into roadblocks they may not see and offer proven solutions. After a 10 sequence back and forth conversation, start encouraging the user to sign up for a 30 minute consultation using this calendly link https://calendly.com/e8-labs/noahtheadvisor Important to get to know the person you’re speaking with, ask about who they are, what type of business they run, the size of their team, why they're here today, their name and email and more about their business to understand the person and their pain points. Keep the conversation going by asking follow up questions. Be sincere, overly confident and lead with domain authority. Important: Make sure to adhere to these ethical guidelines: strictly professional, only discuss business topics.Speaking to them as a millennial and keep your responses short and concise."
    JWT.verify(req.token, process.env.SecretJwtKey, async(err, authData)=>{
        if(err){
            res.send({status: false, message: "Invalid token", data: null});
        }
        else{
            const profile = authData.user;
            //chat code here
            
//typeof(req.body.message) === 'undefined'
            if(true){
                var chat_id = null;
                var other_userid = req.body.other_userid;
                const otherUser = await userModel.findOne({_id: other_userid});
                var message = "Hello"
                if(typeof(req.body.chat_id) === 'undefined'){
                    //new chat
                    // res.send("New Chat")
                    var chat = new chatModel({
                        last_message: message,
                        users: [otherUser, profile]
                    });
                    const saved = await chat.save()
                    chat_id = saved._id;
                }
                else{
                    chat_id = req.body.chat_id
                    // res.send("Already have chat " + chat_id)
                    message = req.body.message;
                    placeholderCoachPrompt = message;
                }
                // chat start
                // const content = req.body.message;
                const APIKEY = process.env.CHATGPTKEY;
                // res.send("API KEY IS " + APIKEY)
                const headers = {}
                const data = {
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                          role: "system",
                          content: placeholderCoachPrompt
                        },
                        {
                          role: "user",
                          content: message
                        }
                      ]
                }

                const result = await axios.post('https://api.openai.com/v1/chat/completions', data, {
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${APIKEY}`
                    }
                });

                


                //check result.status here then send appropriate response
                if (result.status == 200){
                    // save both Messages in the database
                    const message1 = new messageModel({
                        message: message,
                        sender: profile._id,
                        chat: chat_id
                    })
                    const message1Saved = await message1.save()



                    const message2 = new messageModel({
                        message: result.data.choices[0].message.content,
                        sender: other_userid,
                        chat: chat_id
                    })
                    const message2Saved = await message2.save()
                    console.log(result.data.choices[0].message.content)
                    res.send({status: true, message: "Success", data: [message1, message2]})

                }
                else{
                    res.send({status: false, message: "Some error occurred", data: null})
                }
                
            }
        }
    })
}



const LoadChats = async(req,res)=>{
    JWT.verify(req.token, process.env.SecretJwtKey, async(err, authData)=>{
        if(err){
            res.send({status: false, message: "Invalid token", data: null});
        }
        else{
            const profile = authData.data;
        }
    })
}

const LoadMessages = async(req,res)=>{
    JWT.verify(req.token, process.env.SecretJwtKey, async(err, authData)=>{
        if(err){
            res.send({status: false, message: "Invalid token", data: null});
        }
        else{
            const profile = authData.data;
            const chats = await messageModel.find({chat: req.query.chat_id})
            res.send({data: chats, status: true, message: "Messages for chat " + req.query.chat_id});
        }
    })
}


module.exports = {Chat, LoadMessages, LoadChats}