import React, {useState} from 'react';
import axios from 'axios';
import "./Login.css"

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
        console.log(res.data.user_id);
      })
      //for handling 404 network errors 
      // .catch((error) => {
      //   console.log(error);
      // }) 
};
    
    return (
      <div className="login">
        <div className='logForm'>
        <form>
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
          <button onClick={handleClick} className="loginBtn">
            Login
          </button>
        </div>
      </div>
    );
}
