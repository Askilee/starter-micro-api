const {WebSocketServer} = require("ws");

let socket = new WebSocketServer({port:3000});

// const script = fs.readFileSync('./script.js',
//             {encoding:'utf8', flag:'r'});

socket.addListener("connection",(wss,request)=>{

    console.log(request.connection.remoteAddress);
    wss.send("hello");

});
