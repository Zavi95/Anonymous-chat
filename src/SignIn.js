import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <Link to="/signin" className="signin">
      <div className="signin-page">
        <h1>Log In</h1>
        <form className="signin-box">
          <input type="text" className="input" placeholder="Username" />
          <input type="password" className="input" placeholder="Password" />
          <input type="submit" className="input" value="Login" />
        </form>
      </div>
    </Link>
  );
}

export default SignIn;
