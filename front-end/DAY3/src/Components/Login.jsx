
import React from 'react';
import { Link } from 'react-router-dom';
import "./Logstyles.css";
const preventRefresh = (e) => {
  e.preventDefault();
};

export default function Login() {
  return (
    <div className="wrapper signIn">
      <div className="form">
      <div className="heading">LOGIN</div>
        <form>
          <div>
            <label htmlFor="login-email">E-Mail</label>
            <input type="email" id="login-email" placeholder="Enter your mail" />
          </div>
          <div>
            <label htmlFor="login-password">Password</label>
            <input type="password" id="login-password" placeholder="Enter your password" />
          </div>
          <Link to="/Header">
          <Link to='/userhome'>SUBMIT</Link>
          </Link>
        </form>
        <p>
          Don't have an account ? <Link className="signup"to="/Signup"> Sign Up </Link>
        </p>
      </div>
    </div>
  );
}



