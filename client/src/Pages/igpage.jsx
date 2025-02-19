import React, { useState } from "react";
import "../Css/instalogin.css"
import { Link } from "react-router-dom";

const IgPage = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      {/* Announcement Section */}
      <section className="section-all">
        {/* Main Content */}
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
                  {/* Header End */}

                  <div className="form-wrap">
                    <form className="form">
                      <div className="input-box">
                        <input
                          type="text"
                          id="name"
                          placeholder="Phone number, username, or email"
                          maxLength="30"
                          autoComplete="off"
                          name="username"
                          required
                        />
                      </div>

                      <div className="input-box">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          maxLength="30"
                          autoComplete="off"
                          required
                        />
                      </div>

                      <span className="button-box">
                        <button className="btn" type="submit" name="submit">
                          Log in
                        </button>
                      </span>

                      <a className="forgot" href="#">
                        Forgot password?
                      </a>
                    </form>
                  </div>
                  {/* Form-wrap End */}
                </div>
                {/* Login-box End */}

                <div className="login-box">
                  <p className="text">
                    Don't have an account?
                    <Link to="/instagramsignup"> Sign up</Link>
                  </p>
                </div>
                {/* Signup-box End */}

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
                  {/* App-img End */}
                </div>
                {/* App End */}
              </div>
              {/* Content End */}
            </article>
          </div>
          {/* Wrapper End */}
        </main>

        {/* Footer */}
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
          {/* Footer-container End */}
        </footer>
      </section>
    </div>
  );
};

export default IgPage;
