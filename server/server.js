import express from 'express';
import http from 'node:http';

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT ?? 4000;

app.use(express.static("dist"))


server.listen(PORT, ()=>{
    console.log("Servidor Inicializado e el PORT: " + PORT);
})

app.get("/", (req, res)=>{
    console.log("Un usuario ha ingresado")
})