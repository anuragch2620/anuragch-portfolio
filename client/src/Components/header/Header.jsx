import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa"; // FontAwesome Icons
import { PiPhoneCallFill } from "react-icons/pi"; // Phosphor Icon for Phone

const Header = () => {
  return (
    <div className="row bg-dark text-white py-2 px-3">
      {/* Phone Number */}
      <div className="col d-flex align-items-center">
        <PiPhoneCallFill className="me-2" size={20} /> {/* Phone Icon */}
        <span>+1 234 567 890</span>
      </div>

      {/* Social Media Links */}
      <div className="col text-end">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default Header;
