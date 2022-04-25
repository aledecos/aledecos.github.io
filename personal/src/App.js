import * as React from "react";
import {Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/layout";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="*" element={<Navigate replace to="/"/>}/> 
        </Routes>
    </>
  );
}

export default App;
