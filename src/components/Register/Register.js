import React, {useState} from "react";
import axios from "axios";
// import "./Register.css";


export default function Register (props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () =>{

    axios
      .post("/register", { email, password })
      .then((res) => {
        console.log(res);
        alert(res.data);
      });
  }

  return (
    <div className="register">
      <h1 className="pageTitle">Craft Habit</h1>
      <form className="regFrom">
        <input
          id="email"
          placeholder="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          placeholder="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button onClick={handleClick} className="regBtn">
        Register
      </button>
    </div>
  );
    
  
}
