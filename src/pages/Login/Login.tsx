import React, { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import "./Login.css";

type Props = {
  setName: (name:string)=>void
  setPending: (state:boolean)=>void
};

export function Login({setName, setPending}:Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();

  const submit = async (e: SyntheticEvent) => {
    setPending(true);
    e.preventDefault();
    
    try {

        const resp=await fetch("http://127.0.0.1:8000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          body: JSON.stringify({
            email,
            password,
          }),
          credentials: "include",
        });
        const resp2=await resp.json();
        setName(resp2.name);
        (async () => {
          const resp = await fetch("http://127.0.0.1:8000/api/user", {
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          });
          const resp2 = await resp.json();
          setName(resp2.name)
        })().then(()=>{
          setPending(false)
        });
        navigate("/");
        
    } catch (error) {
      console.warn("this is an a error", error);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="container">
          <label htmlFor="email">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </div>

        {/* <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div> */}
      </form>
    </>
  );
}
