// Import necessary modules from React and PropTypes for type-checking
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SignInForm.css";

// Define the SignInForm component
const SignInForm = ({ onSignIn }) => {
  // State to manage the email input value
  const [email, setEmail] = useState("");
  // State to manage the password input value
  const [password, setPassword] = useState("");

  // Handler for changes in the email input field
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handler for changes in the password input field
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(); // Trigger the onSignIn callback passed as a prop
  };

  return (
    // Main container for the login form
    <div className="login-container">
      <div className="login-content">
        {/* Informational section with benefits of the service */}
        <div className="login-info">
          <h2>Expert advice from top doctors</h2>
          <ul>
            <li>Management made easy</li>
            <li>Book appointments any time</li>
            <li>Trusted by patients and doctors</li>
          </ul>
        </div>
        {/* Form section for user login */}
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
          {/* Footer with links for password recovery and sign up */}
          <div className="login-footer">
            <a href="/forgot-password">Forgot password?</a>
            <p>
              Don’t have an account? <a href="/sign-up">Sign up</a>
            </p>
          </div>
        </div>
      </div>
      {/* Copyright information */}
      <div className="copyright">© 2024 MyClinicRx. All rights reserved.</div>
    </div>
  );
};

// Define prop types for the SignInForm component
SignInForm.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

// Export the SignInForm component as the default export
export default SignInForm;
