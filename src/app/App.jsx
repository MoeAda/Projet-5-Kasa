import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";


import Default from './layout/Default'
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import House from "./pages/House";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Default />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about/" element={<About />}></Route>
          <Route path="/logement/:id" element={<House />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

