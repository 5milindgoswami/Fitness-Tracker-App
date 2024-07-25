const mongoose = require('mongoose')


const chatMessageSchema = new mongoose.Schema({
    user:{type:String,require:true},
    message:{type:String,require:true},
    timestam:{type:Date, default: Date.now},
});

const ChatMessage = mongoose.model("ChatMessage",chatMessageSchema)
module.exports = ChatMessage;