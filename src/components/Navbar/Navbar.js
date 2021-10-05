//this component will hold the navigation to the landing page, the user profile, and also to logout
//if users is on craft page, they can navigate back to landing page

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import "./Navbar.css";

export default function Navbar(props) {

  const handleClick = () =>{
    axios.delete("/logout")
    .then((res) => {
    props.handleUserId(null)
    console.log(window);
    window.location.pathname = "/login";
})
  };

    return (
      <div className="navbar">
        <div className="logo">
          <h1>Craft Habit</h1>
        </div>
        <div className="links">
          {!props.userId && (
            <>
              <Link className="firstView" to="/register">Register</Link><br />
              <Link className="firstView" to="/login">Login</Link><br />
            </>
          )}
          {props.userId && (
            <>
              <Link to="/landing">Choose a Craft</Link> <br />
              <Link to="/profile">Profile</Link> <br />
              {/* <Link to="/logout">Logout</Link> */}
              <button onClick={handleClick} className="logoutBtn">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    );
};
