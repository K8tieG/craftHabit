//this component will hold the navigation to the landing page, the user profile, and also to logout
//if users is on craft page, they can navigate back to landing page

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Navbar.css";

export default function Navbar(props) {

  const handleClick = () =>{
    axios.delete("/logout")
    .then((res) => {
    // props.handleUserId(null)
    console.log(window);
    window.location.pathname = "/login";
})
  };

    return (
      <div className="navbar">
        <div className="navLogo">
          <h1>Craft Habit</h1>
        </div>
        <div className="nav-link-box">
              <Link className="navText" to="/landing">
                Choose a Craft
              </Link>{" "}
              <br />
              <Link className="navText" to="/profile">
                Profile
              </Link>{" "}
              <br />
              <button onClick={handleClick} className="logoutBtn">
                Logout
              </button>
        </div>
      </div>
    );
};
