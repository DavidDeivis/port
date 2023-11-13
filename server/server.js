import http from "node:http";
import express from "express";
import {Server as socketServer} from "socket.io";


const app = express();
const server = http.createServer(app);
const io = new socketServer(server);

app.use(express.static("client/dist"));

app.get("/", (req, res)=>{

    console.log("a user connected")
    
})

io.on("connection", (socket)=>{

    console.log("a socket connected")

})

server.listen(process.env.PORT ?? 4000, ()=>{
    console.log("Servidor inicializado en el puerto: " + 4000);
})