import React, { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from 'react-router-dom'
import { useFetching } from "../../hooks/useFetching";

import "./Register.css";
import PostServece from "../../API/PostServece";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [password2Dirty, setPassword2Dirty] = useState(false);
  
  const [nameError, setNameError] = useState("Name cannot be empty");
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState("Password cannot be empty");
  const [password2Error, setPassword2Error] = useState("Confirmation password cannot be empty");
  const [repsonse, setResponse]=useState({})

  const navigate = useNavigate();

  const blurHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    switch(e.currentTarget.name){
      case 'name':
      setNameDirty(true) 
      break
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      case 'password2':
        setPassword2Dirty(true)
        break
      }
  }

  const nameHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value);
    
    if(e.target.value.length<1){
      setNameError("Name cannot be empty")
    } else {
      setNameError('');
    }
  }

  const emailHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(e.target.value).toLowerCase())){
      setEmailError('Not correct email')
    } else {
      setEmailError('');
    }
  }

  const passwordHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value);
    if((e.target.value!==password2)&&password2Dirty){
      setPassword2Error('Passwords do not match')
    } else {
      setPasswordError('');
    }
  }

  const password2Handler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword2(e.target.value);
    if(e.target.value!==password){
      setPassword2Error('Passwords do not match')
    } else {
      setPassword2Error('');
    }
  }


  const notify = (text: string) =>
    toast.error(text, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className: "black-background",
      bodyClassName: "grow-font-size",
    });

    const [registrate, pending, regError]=useFetching(async()=>{
      const resp = await PostServece.register({
        name,
        email,
        password,
        'category_id': 2,
        })
        setResponse(resp)
        navigate("/login");
    })

 
    const submit = async (e: SyntheticEvent) => {
      e.preventDefault();
      
      registrate()


      
      };

  return (
    <>
      {regError&&<h2>произошла ошибка{regError}</h2>}
      {pending&&<h2>Loading</h2>}
      <form onSubmit={submit}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="name">
            <b>Name</b>
          </label>
          {(nameDirty&&nameError)&&<div className="error">{nameError}</div>}
          <input
            onBlur={(e)=>blurHandler(e)}
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            onChange={(e) => nameHandler(e)}
            value={name}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          {(emailDirty&&emailError)&&<div className="error">{emailError}</div>}
          <input
          onBlur={(e)=>blurHandler(e)}
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            onChange={(e) => emailHandler(e)}
            value={email}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          {(passwordDirty&&passwordError)&&<div className="error">{passwordError}</div>}
          <input
            onBlur={(e)=>blurHandler(e)}
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={(e) => passwordHandler(e)}
            value={password}
          />

          <label htmlFor="password2">
            <b>Repeat Password</b>
          </label>
          {(password2Dirty&&password2Error)&&<div className="error">{password2Error}</div>}
          <input
            onBlur={(e)=>blurHandler(e)}
            type="password"
            placeholder="Repeat Password"
            name="password2"
            required
            onChange={(e) => password2Handler(e)}
            value={password2}
          />
          <hr />

          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>

        <div className="container signin">
        <Link to={`/login`}>
          <p>
            Already have an account? 
          </p>
          </Link>
        </div>
        
      </form>
      <ToastContainer />
    </>
  );
}
