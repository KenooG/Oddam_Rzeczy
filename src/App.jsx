import { useState } from 'react'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import HomeLogged from "./components/HomeLogged.jsx";

import Give from "./components/Give.jsx";
import LoggedOut from "./components/LoggedOut.jsx";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/logged" element={<HomeLogged/>} />
              <Route path="/give" element={<Give/>} />
              <Route path="/loggedout" element={<LoggedOut/>} />
          </Routes>
      </BrowserRouter>
  )
}








export default App
