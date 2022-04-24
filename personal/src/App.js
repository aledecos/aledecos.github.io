import * as React from "react";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";



function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<div>hello</div>}/>
          <Route path="contact" element={<div>hello</div>}/>
          <Route path="*" element={<Navigate replace to="/"/>}/> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
