//this component will hold the navigation to the landing page, the user profile, and also to logout
//if users is on craft page, they can navigate back to landing page

import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar() {
    return (
      <div className="navbar">
        <h1>Craft Habit</h1>
        <Link to="/login">Login</Link> <br />
        <Link to="/register">Register</Link> <br />
        <Link to="/landing">Choose a Craft</Link> <br />
        <Link to="/profile">Profile</Link>
      </div>
    );
};
