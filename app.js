'use strict';

const express = require('express')

//express() -> singleton pattern returns an object that can be modified
const app = express();
const messages = [];

class Message {
    constructor(text, author){
        this.text = text;
        this.author = author;
    }
}
//route = string (the address)
//Callback function = tells the route what to do using 2 parameters (the request, and response)
app.get('/message', (request, response) => {
    console.log("heres a request!" + request.method);
    response.send(messages);
}); //this method modifies app singleton 
//QQQ request.method???
// request means client says hey gimme this pls
// response is server saying i gotchu here you go
function createMessage(req, res, next) {
    const messageText = req.query.text;
    const authorName = req.query.author;

    const message = new Message(messageText, authorName);
    req.message = message;

    next();
}
function saveMessage(req, res, next){

        let message = req.message;
        messages.push(message);
        next();
}

 app.post('/message', createMessage, saveMessage, (request, response, next) => {
     response.send(messages);
 });
 app.use(function (err, request, response, next) {
     console.log(err);
    response.send('error handler hit!')
 });
 app.use(function (request,response){
     response.status(404).send('Nothing found')
 })

module.exports = {
    start: function (port){
        app.listen(port, () =>{
            console.log('app is running on :' + port);
        });
    },
    app,
};