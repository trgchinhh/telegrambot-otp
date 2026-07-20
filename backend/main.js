// Demo xác thực đa yếu tố 

require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const randomstring = require("randomstring");
const cors = require("cors");
const telegrambot = require("node-telegram-bot-api");

// tạo database demo
const user_db = [
    {username: "chinh", password: "3004"},
    {username: "bao", password: "2206"},
    {username: "an", password: "0912"},
    {username: "minh", password: "1234"},
    {username: "quang", password: "2345"},
    {username: "tu", password: "9999"},
]

// bot telegram
const api_bot = process.env.API_BOT;
const port = process.env.PORT;
let chatidglobal = null;
const bot = new telegrambot(api_bot, {polling: true});

const app = express();
app.use(bodyparser.json());
app.use(cors());

bot.onText(/\/start/, (msg) => {
    chatidglobal = msg.chat.id;
    bot.sendMessage(msg.chat.id, "Vui lòng đăng nhập để nhận otp !");
}); 

function send_otp(chatid, otp){
    bot.sendMessage(chatid, `Otp của bạn là: ${otp}`)
}

function send_login_otp(chatid, status){
    bot.sendMessage(chatid, `${status}`)
}

// otp
var otp;

// api login 
app.post("/login", (req, res) => {
    const { username, password } = req.body
    const user = user_db.find(user => user.username == username
                                   && user.password == password)
    if(user){
        otp = randomstring.generate({
            length: 4,
            charset: "numeric"
        });
        console.log("Create OTP: ", otp)
        send_otp(chatidglobal, otp);
        res.status(200).json({message: "Xác thực thành công"})
    } else {
        res.status(401).json({message: "Xác thực thất bại"})
    }
});

// api confirm
app.post("/confirm", (req, res) => {
    const { userotp } = req.body
    let status;
    if(userotp == otp){
        status = "Login thành công";
        res.status(200).json({message: status});
    } else {
        status = "Login thất bại"
        res.status(401).json({message: status});        
    }
    send_login_otp(chatidglobal, status);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
