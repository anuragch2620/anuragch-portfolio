import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../Css/FbLogin.css"; // Import external CSS file
import { Link } from "react-router-dom";

const FbLogin = () => {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container py-5 d-flex flex-wrap align-items-center">
          <div className="col-lg-7 col-md-6 text-center text-md-start">
            <h1 className="fw-bold display-1 text-primary">facebook</h1>
            <p className="lead mt-3 fs-3 text-dark">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mx-auto mt-4 mt-md-0">
            <div className="card shadow-lg p-4">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Email address or phone number"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                />
              </div>
              <button className="btn btn-primary btn-lg w-100">Log In</button>
              <p className="text-center mt-3">
                <a href="#" className="text-decoration-none text-primary">
                  Forgotten password?
                </a>
              </p>
              <hr />
              <button className="btn btn-success btn-lg w-100">
  <Link to="/facebooksignup" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
    Create New Account
  </Link>
</button>

              
            </div>
            <div className="text-center mt-3">
              <p>
                <b>Create a Page</b> for a celebrity, band or business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-3">
        <div className="container text-center">
          <p className="text-muted">
            Responsive Facebook Login clone © 2021 Created by Sanu K Joseph
          </p>
        </div>
      </footer>
    </>
  );
};

export default FbLogin;
