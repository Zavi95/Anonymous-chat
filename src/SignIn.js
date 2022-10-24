import React, { useState, useEffect, useRef } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

//React JS form validation?

function SignIn() {
  return (
    <Link to="/" className="signin">
      <div className="signin-page">
        <form className="signin-box">
          <input type="email" className="user-input" placeholder="Email" />
          <input
            type="password"
            className="user-input"
            placeholder="Password"
          />
          <Link to="/home" className="signin-page">
            {" "}
            <input type="submit" className="user-input" value="Login" />
          </Link>
        </form>
      </div>
    </Link>
  );
}

export default SignIn;
