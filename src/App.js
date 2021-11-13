import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Register from "./components/Register";
// import Register from './components/Login';
import Login from "./components/Login";

function App() {
  const [cursorpositionX, setCursorpositionX] = useState();
  const [cursorpositionY, setCursorpositionY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorpositionX(e.pageX);
    setCursorpositionY(e.pageY);
  });

  return (
    <BrowserRouter>
      <div
        className="cursor"
        style={{ left: cursorpositionX + "px", top: cursorpositionY + "px" }}
      ></div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
