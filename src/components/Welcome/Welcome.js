import React from "react";
import { Link } from 'react-router-dom';
// import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="logo">
        <h1>Craft Habit</h1>
      </div>
      <div className="links">
        <Link className="firstView" to="/Register">
          Register
        </Link>

        <Link className="firstView" to="/Login">
          Login
        </Link>
      </div>
    </div>
  );
}
