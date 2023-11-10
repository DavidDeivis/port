import { useState } from 'react'
import './App.css'
import Leaf from './components/Leaf.jsx';

import io from "socket.io-client"

const socket = io("http://localhost:4000");

function App() {


  return (
    <>
      <Leaf />
    </>
  )
}

export default App
