import React, { useState } from "react";
import {
  FaUser,
  FaKey,
  FaEnvelope,
  FaGoogle,
  FaFacebook,
  FaLock,
  FaPaperPlane,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import "./DevLogin.css"; // Import CSS file

export default function DevLogin() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="devlogin-container">
      <div className="devlogin-card">
        <h2 className="devlogin-title">{isSignup ? "Sign Up" : "Login"}</h2>
        <form className="devlogin-form">
          {isSignup && (
            <div className="devlogin-input-group">
              <FaEnvelope className="devlogin-icon" />
              <input type="email" placeholder="Email Address" required />
            </div>
          )}

          <div className="devlogin-input-group">
            <FaUser className="devlogin-icon" />
            <input type="text" placeholder="Username" required />
          </div>

          <div className="devlogin-input-group">
            <FaKey className="devlogin-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span
              className="devlogin-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          {!isSignup && (
            <div className="devlogin-forgot">
              <a href="#">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="devlogin-submit">
            {isSignup ? "Sign Up" : "Login"}{" "}
            {isSignup ? <FaPaperPlane /> : <FaLock />}
          </button>
        </form>

        <div className="devlogin-divider">
          or {isSignup ? "sign up" : "login"} with
        </div>

        <div className="devlogin-social-buttons">
          <button className="devlogin-google">
            Google <FaGoogle />
          </button>
          <button className="devlogin-facebook">
            Facebook <FaFacebook />
          </button>
        </div>

        <div className="devlogin-social-buttons">
          <button className="devlogin-instagram">
            Instagram <FaInstagram />
          </button>
          <button className="devlogin-github">
            GitHub <FaGithub />
          </button>
        </div>

        <div className="devlogin-toggle">
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Already a member? Sign in" : "Not a member? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}
