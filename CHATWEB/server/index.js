const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const ChatMessage = require('./models/ChatMessage')

const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/chat',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("db is connected"))
.catch((err)=>console.log(err));

app.get('/messages',async(req,res) => {
    try{
        const message = await ChatMessage.find();
        console.log(message);
        res.json(message);
    }catch(error){
        console.error(error)
        res.status(500).json({error:'internal error'})
    }
});
app.post('/messages',async(req,res)=>{
    try{
        const {user,message}= req.body;
        if(!user|| !message){
            return res.status(400).json({error:"user and message is required"})
        }
        const chatMessage = new ChatMessage({
            user,
            message,
        });
        await chatMessage.save();
        res.status(201).json(chatMessage);
    }catch(error){
        console.error(error);
        res.status(500).json({error:'internal error'});
    }
});
app.listen(PORT, ()=> console.log(`server is running on ${PORT}`))