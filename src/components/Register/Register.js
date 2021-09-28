import React from "react";
import axios from "axios";

export default function register() {
  const email = "";
  const password ="";
  const handleClick = () =>{

    axios.post("/register", { email, password })
    .then((res) => {
      alert(res.data);
    });
    
  }

  return (

    <div className="register">
      <h1>Register Comp</h1>
      <form action="">
        <input type="text" name="email" id="email"/>
        <input type="password" name="password" id="password"/>
      </form>
      <button onClick={handleClick} className="regBtn">Register</button>
    </div>
  );
    
  
}
