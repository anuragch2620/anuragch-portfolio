import React from "react";
import { Link } from "react-router-dom";
import "../Css/fbsignup.css"; // Import external CSS file

const FacebookSignup = () => {
  return (
    <>
      <main>
      <div className="row bg-fb-blue pt-5">
  <div className="container">
    <div className="row no-gutters pl-2 pr-2">
      
      {/* Left Side - Login Form */}
      <div className="col-sm-12 col-md-6 d-flex justify-content-start align-items-center p-5 " >
      <h1 className="text-white logo">facebook</h1>
        
      </div>

      {/* Right Side - Facebook Logo */}
      <div className="col-sm-12 col-md-6 d-flex justify-content-end loginfgsignupform">
        <form className="d-flex align-items-center gap-3 login-form">
          <div className="input-container">
            <input
              type="text"
              className="form-control form-control-sm"
              id="emailPhone"
              placeholder="Email or Phone"
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              className="form-control form-control-sm"
              id="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" id="submit" className="btn btn-sm btn-fb">
            Log In
          </button>
        </form>
      </div>

    </div>
  </div>
</div>


<div style={{ backgroundColor: "#edf0f5", width: "100vw", padding: "15px" }}>
  <div className="container">
    <div className="row no-gutters d-flex align-items-center g-5">
      
      {/* First Column - Moves to Right End */}
      <div className="col-md-6 order-md-2 text-md-right pr-md-5 mt-5">
      <div
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "30px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "left",
          }}
        >
          <h1 style={{ color: "#1877f2", textAlign: "center" }}>Sign Up</h1>
          <h6 style={{ color: "#333", textAlign: "center" }}>It's free and always will be.</h6>
          <form>
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="text" placeholder="First Name" style={inputStyle} />
              <input type="text" placeholder="Last Name" style={inputStyle} />
            </div>
            <input type="text" placeholder="Mobile number or email" style={inputStyle} />
            <input type="password" placeholder="New password" style={inputStyle} />

            <h5 style={{ marginTop: "15px", color: "#1877f2" }}>Birthday</h5>
            <div style={{ display: "flex", gap: "10px" }}>
              <select style={selectStyle}>{generateOptions(1, 12, "Month")}</select>
              <select style={selectStyle}>{generateOptions(1, 31, "Day")}</select>
              <select style={selectStyle}>{generateOptions(1980, 2024, "Year")}</select>
            </div>

            <h5 style={{ marginTop: "15px", color: "#1877f2" }}>Gender</h5>
            <div style={{ display: "flex", gap: "15px" }}>
              <label><input type="radio" name="gender" /> Female</label>
              <label><input type="radio" name="gender" /> Male</label>
              <label><input type="radio" name="gender" /> Custom</label>
            </div>

            <p style={{ fontSize: "12px", color: "#666", marginTop: "10px" }}>
              By clicking Sign Up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy</a> & <a href="#">Cookies</a>.
            </p>

            <button style={buttonStyle}>Sign Up</button>
          </form>
        </div>
       
      </div>

      {/* Second Column - Moves to Left End */}
      <div className="col-md-6 order-md-1 mr-5 justify-content-start m-0">
      <h2>Connect with friends and the world around you on Facebook.</h2>
        <ul className="list-group">
          <li className="list-group-item bg-transparent border-0 pl-0">
            <i className="fas fa-newspaper fa-3x align-middle" style={{fontSize:'30px',}}></i>
            <strong> See photos and updates </strong> from friends in News Feed.
          </li>
          <li className="list-group-item bg-transparent border-0 pl-0">
            <i className="fas fa-star fa-3x align-middle" style={{fontSize:'30px' }}></i>
            <strong> Share what's new </strong> in your life on your Timeline.
          </li>
          <li className="list-group-item bg-transparent border-0 pl-0">
            <i className="fas fa-search fa-3x align-middle" style={{fontSize:'30px' }}></i>
            <strong> Find more </strong> of what you're looking for with Facebook Search.
          </li>
        </ul>
      </div>

    </div>
  </div>
</div>


        <div className="container-fluid bg-white pl-0 pr-0">
          <footer className="p-2">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-sm-12">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#">English (US)</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Español</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Français (France)</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">中文(简体)</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">العربية</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Português (Brasil)</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Italiano</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">한국어</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Deutsch</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">हिन्दी</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">日本語</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="btn-secondary btn-add-language">
                        <i className="fas fa-plus fa-1x text-white"></i>
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#">Sign Up</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Log In</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Messenger</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Facebook Lite</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Watch</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">People</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Profiles</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Pages</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Pages Categories</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Events</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Places</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Games</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Locations</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Marketplace</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Groups</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Instagram</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Local</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Fundraisers</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Services</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">About</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Create Ad</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Create Page</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Developers</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Careers</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Privacy</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Cookies</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        Ad Choices <i className="fas fa-ad"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Terms</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Account Security</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Login Help</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};
const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };
  
  const selectStyle = {
    width: "33%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };
  
  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "#1877f2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15px",
  };
  
  const generateOptions = (start, end, defaultText) => {
    let options = [<option key="default" value="">{defaultText}</option>];
    for (let i = start; i <= end; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

export default FacebookSignup;
