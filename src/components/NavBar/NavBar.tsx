
import { NavLink } from "react-router-dom";

import "./NavBar.css";
type Props = {
  name:string,
  setName: (name:string)=>void

};

export function NavBar({name, setName}:Props) {


  const logout = async () => {
  
    try {

        const resp = await fetch("http://127.0.0.1:8000/api/logout", {
          method: "POST",

          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          credentials: "include",
        });
        
        setName('');
    } catch (error) {
      console.warn("this is an a error", error);
    }
  };


   return (
   
      <ul className="topnav">
        <li>
        <NavLink to="/" end>Home</NavLink>
        </li>
       {!name&& <li>
          <NavLink to="/login">Login</NavLink>
        </li>}
       {!name&& <li>
          <NavLink to="/registration">Registration</NavLink>
        </li>}
        {name&&<li>
          <NavLink to="/login" onClick={logout} end>Logout</NavLink>
        </li>}
      </ul>
    
  );
}
