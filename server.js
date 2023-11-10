import http from "http";
import express from "express";
import {Server as SocketServer} from "socket.io";
// import {PORT} from "./config.js";


const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket)=>{
    console.log("A user connected");

    socket.on("message", data=>{
        socket.broadcast.emit("message", data);
    })

    socket.on("hit", ()=>{
        socket.broadcast.emit("hit");
    })
})

app.use(express.static("client/dist"));

app.get("/", (req, res)=>{
    
})



server.listen(process.env.PORT ?? 4000, ()=>{
    console.log("Servidor inicializado en el puerto: " + 4000);
})