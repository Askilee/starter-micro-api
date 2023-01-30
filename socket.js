const {WebSocketServer} = require("ws");
const fs = require("fs");

let socket = new WebSocketServer({port:80});

// const script = fs.readFileSync('./script.js',
//             {encoding:'utf8', flag:'r'});

socket.addListener("connection",(wss,request)=>{

    console.log(request.connection.remoteAddress);
    wss.send("hello");

});
