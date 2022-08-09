const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const server = require("http").createServer(app);
const io = require('socket.io')(server);

app.get('/', function (req, res){
    res.sendFile(
        path.join(__dirname, 'index.html'));
});

io.on("connection", (socket) => {
    console.log('a user connected');
    socket.on("disconnect", () => {
        console.log('user disconnected');
    });

    socket.on("new city", (msg) => {
        console.log('new city typed from client: ', msg);
        io.emit('incoming', msg);
        })
}); 

server.listen(3000, () => {
    console.log('listening on *:3000');
}); 
