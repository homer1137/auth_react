import React, { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import { useFetching } from "../../hooks/useFetching";
import PostServece from "../../API/PostServece";


import "./Login.css";

type Props = {
  setName: (name:string)=>void
  setPending: (state:boolean)=>void
  setUser: (user:{})=>void
};

export function Login({setName, setUser}:Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login, pendingLogin, errorLogin] = useFetching(async()=>{
    const resp:any = await PostServece.login({
      email,
      password
      })

  })

  const [getUser, pendingGetUser, errorGetUser] = useFetching(async()=>{
    const resp:any = await PostServece.user()
    setUser(JSON.parse(resp.request.response))
    setName(JSON.parse(resp.request.response).name)
    navigate("/");
  })


  const submit = async (e: SyntheticEvent) => {
    
    e.preventDefault();
 
    await login();
    await getUser();
        
   
  };

  return (
    <>
    {errorGetUser&&<h2>произошла ошибка{errorGetUser}</h2>}
    {errorLogin&&<h2>произошла ошибка{errorLogin}</h2>}
      {(pendingGetUser||pendingLogin)&&<h2>Loading</h2>}
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
