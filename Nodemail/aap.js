const express = require('express')
const sendMail = require('./controllers/sendMail');

const app=express();

app.get("/",(req,res)=>{
    res.send('I am a server');
})

app.get('/mail',sendMail);


const start = async()=>{
    try {
        app.listen(8080,"127.0.0.1",()=>{
            console.log('request accepted');
        });
    } catch (error) {
        
    }
}

start();
