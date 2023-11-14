import { useState } from 'react'
import './App.css'
import Leaf from './components/Leaf.jsx';
import io from "socket.io-client";

// https://deivis-port.onrender.com

// https://deivis-port.onrender.com:10000

let UrlOrigin = window.location.origin;
let PORT = "";

if(UrlOrigin.includes("localhost")) {
  PORT = UrlOrigin.substring(0, UrlOrigin.length - 4) + 4000;
} else {
  PORT = UrlOrigin.substring(0, UrlOrigin.length) + ":" + 10000;
}

console.log(PORT)

const socket = io(PORT);

function App() {


  return (
    <>
      <Leaf />
    </>
  )
}

export default App
