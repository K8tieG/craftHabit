import React, {useState} from 'react';
import axios from 'axios';

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleClick = (e) =>{
      e.preventDefault();


    axios
      .post("login", { email, password })
      .then((res) => {
        props.handleUserId(res.data.user_id)
        props.history.push('./landing');
        alert(`welcome, ${res.data.email}`);
      })
      //for handling 404 network errors 
      // .catch((error) => {
      //   console.log(error);
      // }) 
};
    
    return (
      <div className="login">
        <h1>Login Comp</h1>
        <form>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button onClick={handleClick} className="loginBtn">
          Login
        </button>
      </div>
    );
}
