import http from "node:http";
import express from "express";


const app = express();
const server = http.createServer(app);

app.use(express.static("client/dist"));

app.get("/", (req, res)=>{

    console.log("a user connected")
    
})

server.listen(process.env.PORT ?? 4000, ()=>{
    console.log("Servidor inicializado en el puerto: " + 4000);
})