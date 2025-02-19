import React from "react";
import "../Css/instasignup.css"; // Importing CSS
import { Link } from "react-router-dom";

const IgSignup = () => {
  return (
    <main>
      <div className="page">
        <div className="header">
        <img
                      className="logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                      alt="Instagram"
                    />
          <p>Sign up to see photos and videos from your friends.</p>
          <button>
            <i className="fab fa-facebook-square"></i> Log in with Facebook
          </button>
          <div className="separator">
            <hr />
            <p>OR</p>
            <hr />
          </div>
        </div>

        <div className="container">
          <form action="">
            <input type="text" placeholder="Mobile Number or Email" />
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Sign up</button>
          </form>

          <ul className="terms">
  <li>By signing up, you agree to our</li>
  <li>
    <a href="#">Terms</a>
  </li>
  <li>
    <a href="#">Data Policy</a>
  </li>
  <li>and</li>
  <li>
    <a href="#">Cookies Policy</a>.
  </li>
</ul>

        </div>
      </div>

      <div className="option">
        <p>
          Have an account? <Link to="/igpage">Log in</Link>
        </p>
      </div>

      <div className="otherapps">
        <p>Get the app.</p>
        <button type="button">
          <i className="fab fa-apple"></i> App Store
        </button>
        <button type="button">
          <i className="fab fa-google-play"></i> Google Play
        </button>
      </div>

      <div className="footer">
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">HELP</a>
          </li>
          <li>
            <a href="#">PRESS</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">JOBS</a>
          </li>
          <li>
            <a href="#">PRIVACY</a>
          </li>
          <li>
            <a href="#">TERMS</a>
          </li>
          <li>
            <a href="#">LOCATIONS</a>
          </li>
          <li>
            <a href="#">TOP ACCOUNTS</a>
          </li>
          <li>
            <a href="#">HASHTAGS</a>
          </li>
          <li>
            <a href="#">LANGUAGE</a>
          </li>
        </ul>
        <p>© 2025 INSTAGRAM</p>
      </div>
    </main>
  );
};

export default IgSignup;
