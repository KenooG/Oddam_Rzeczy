import { useState } from 'react'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />

          </Routes>
      </BrowserRouter>
  )
}








export default App
