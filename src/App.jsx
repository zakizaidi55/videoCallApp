import { useState } from "react"
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/Room/:RoomId" element = {<RoomPage/>}/>
      </Routes>
    </>
  )
}

export default App
