import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"; // FontAwesome Icons
import { PiPhoneCallFill } from "react-icons/pi"; // Phosphor Icon for Phone
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <div className="container">
      <div className="row text-black py-2 px-3">
        {/* Phone Number */}
        <div className="col d-flex align-items-center">
          <a
            href="tel:+919990066707"
            className="d-flex align-items-center text-decoration-none text-black"
          >
            <PiPhoneCallFill className="me-2" size={20} />
            <span>+91 9990066707</span>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="col text-end">
          <Link
            to="/facebooklogin" // Use `to` for internal navigation
            className="text-black mx-2"
          >
            <FaFacebook size={20} />
          </Link>
          <Link
            to="/igpage" // Use `to` for internal navigation
            className="text-black mx-2"
          >
            <FaInstagram size={20} />
          </Link>
          <a
            href="https://github.com" // External link can still use <a>
            target="_blank"
            rel="noopener noreferrer"
            className="text-black mx-2"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
