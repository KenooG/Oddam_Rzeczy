import { useState } from 'react'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Logged from "./components/Logged.jsx";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/logged" element={<Logged/>} />
          </Routes>
      </BrowserRouter>
  )
}








export default App
