import React, { useEffect, useState, SyntheticEvent } from "react";

import { NavBar } from "./components/NavBar/NavBar";
import {  Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Profile } from "./pages/Profile/Profile";

import "./App.css";
import { ComicDetail } from "./pages/ComicDetail/ComicDetail";

function App() {

  const [name, setName] = useState('');
  const [user, setUser]=useState({})
  const [pending, setPending] = useState(false);

  return (
    <>
      <NavBar name={name}  setName={setName}/>
      <div>
          <Routes>
            <Route path="/login" element={<Login setName={setName} setUser={setUser} setPending={setPending} />} />
            <Route path="/registration" element={<Register />} />
            <Route path="/" element={<Home name={name} pending={pending} />} />
            <Route path="/profile" element={<Profile user={user}/>} />
            <Route path="/comics/:id" element={<ComicDetail/>} />
          </Routes>
      </div>
    </>
  );
}

export default App;
