import http from "node:http";
import express from "express";
import {Server as socketServer} from "socket.io";
import cors from "cors";

let PORT = process.env.PORT ?? 4000;

let count = 0;


const app = express();
const server = http.createServer(app);
const io = new socketServer(server, {
    cors: {
        origin: "*"
    }
});

app.use(express.static("client/dist"));

app.get("/", (req, res)=>{

    console.log("a user connected")
    
})

io.on("connection", (socket)=>{

    count++;

    // console.log(count);

    console.log("Number of users who were connected: " + count);

})

server.listen(PORT, ()=>{
    console.log("Servidor inicializado en el puerto: " + PORT);
})