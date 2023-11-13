import { useState } from 'react'
import './App.css'
import Leaf from './components/Leaf.jsx';
import io from "socket.io-client";

const socket = io();

function App() {


  return (
    <>
      <Leaf />
    </>
  )
}

export default App
