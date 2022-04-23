import * as React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="teams" element={<div>hello</div>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
