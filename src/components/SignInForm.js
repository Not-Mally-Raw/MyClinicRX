// src/components/SignInForm.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SignInForm.css";

const SignInForm = ({ onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn();
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-info">
          <h2>Expert advice from top doctors</h2>
          <ul>
            <li>Management made easy</li>
            <li>Book appointments any time</li>
            <li>Trusted by patients and doctors</li>
          </ul>
        </div>
        <div className="login-form">
          <div className="clinic-name">MyClinicRx</div>
          <h2>Welcome back</h2>
          <p>Log in to your account and we'll get you in to see our doctors.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit">Sign in</button>
          </form>
          <div className="login-footer">
            <a href="/forgot-password">Forgot password?</a>
            <p>
              Don’t have an account? <a href="/sign-up">Sign up</a>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">© 2024 MyClinicRx. All rights reserved.</div>{" "}
      {/* New line */}
    </div>
  );
};

SignInForm.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

export default SignInForm;
