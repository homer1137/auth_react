import React, { useEffect, useState, SyntheticEvent } from "react";

import { NavBar } from "./components/NavBar/NavBar";
import {  Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

import "./App.css";

function App() {

  const [name, setName] = useState('');
  const [pending, setPending] = useState(false);

  return (
    <>
      <NavBar name={name}  setName={setName}/>
      <main>
          <Routes>
            <Route path="/login" element={<Login setName={setName} setPending={setPending}/>} />
            <Route path="/registration" element={<Register />} />
            <Route path="/" element={<Home name={name} pending={pending}/>} />
          </Routes>
      </main>
    </>
  );
}

export default App;
