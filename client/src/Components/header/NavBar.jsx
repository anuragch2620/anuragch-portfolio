import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navData = [
    {
      path: "/Pages/onpopproduct.html",
      content: "Web Design",
      icon: "bi bi-window",
      submenu: [
        { path: "#", content: "HTML Website Design", icon: "bi bi-file-code" },
        {
          path: "#",
          content: "WordPress Website Design",
          icon: "bi bi-wordpress",
        },
        { path: "#", content: "Shopify Website Design", icon: "bi bi-shop" },
      ],
    },
    {
      path: "#",
      content: "Web Development",
      icon: "bi bi-code-slash",
      submenu: [
        {
          path: "#",
          content: "Core PHP Web Development",
          icon: "bi bi-file-code",
        },
        {
          path: "#",
          content: "React Web Development",
          icon: "bi bi-filetype-jsx",
        },
        { path: "#", content: "Laravel Web Development", icon: "bi bi-layers" },
      ],
    },
    {
      path: "#",
      content: "Mobile App",
      icon: "bi bi-phone",
      submenu: [
        { path: "#", content: "Android Apps", icon: "bi bi-android" },
        { path: "#", content: "Flutter App Development", icon: "bi bi-phone" },
        {
          path: "#",
          content: "React Native App Development",
          icon: "bi bi-filetype-jsx",
        },
      ],
    },
    {
      path: "#",
      content: "Portal",
      icon: "bi bi-box",
      submenu: [
        {
          path: "#",
          content: "B2B Portal Development",
          icon: "bi bi-briefcase",
        },
        {
          path: "#",
          content: "Travel Portal Development",
          icon: "bi bi-airplane",
        },
        { path: "#", content: "Real Estate Portal", icon: "bi bi-building" },
      ],
    },
    {
      path: "#",
      content: "Digital Marketing",
      icon: "bi bi-globe",
      submenu: [
        { path: "#", content: "Domain & Hosting", icon: "bi bi-server" },
        { path: "#", content: "Email Marketing", icon: "bi bi-envelope" },
        {
          path: "#",
          content: "Social Media Marketing",
          icon: "bi bi-facebook",
        },
        { path: "#", content: "SEO Services", icon: "bi bi-search" },
      ],
    },
    {
      path: "#",
      content: "Graphics Design",
      icon: "bi bi-palette", // Changed to a design-related icon
      submenu: [
        {
          path: "#",
          content: "Catalog Design Services",
          icon: "bi bi-journal-richtext",
        }, // Changed
        { path: "#", content: "Logo Design Services", icon: "bi bi-brush" }, // Changed
        { path: "#", content: "3D Logo Design Services", icon: "bi bi-cube" }, // Changed
        {
          path: "#",
          content: "Creative Label Design Services",
          icon: "bi bi-paint-bucket",
        }, // Changed
      ],
    },
    {
      path: "#",
      content: "Portfolio",
      icon: "bi bi-folder-symlink", // Changed to a folder-related icon
      submenu: [
        { path: "#", content: "Our Website Work", icon: "bi bi-window" }, // Changed
        {
          path: "#",
          content: "Web Designing",
          icon: "bi bi-layout-text-window-reverse",
        }, // Changed
        {
          path: "#",
          content: "E-commerce Website Portfolio",
          icon: "bi bi-cart-check",
        }, // Changed
        { path: "#", content: "Logo Design", icon: "bi bi-paint-bucket" }, // Changed
        { path: "#", content: "3D Logo", icon: "bi bi-cube" }, // Changed
        { path: "#", content: "Catalog Design", icon: "bi bi-journal-text" }, // Changed
        { path: "#", content: "Label Design", icon: "bi bi-tags" }, // Changed
      ],
    },
  ];

  return (
    <>
      <>
        {/* Top Navigation Bar */}
        <div className="container-fluid">
          <div className="container">
            <div className="row py-3">
              <div className="col d-flex justify-content-start gap-3">
                <a href="#">
                  <i className="bi bi-search-heart fs-3 text-dark"></i>
                </a>
              </div>
              <div className="col text-center">
                <a href="/" className="logo-link">
                  <img
                    src="https://www.ultratribe.com/cdn/shop/files/Tribe_Logo_Normal_11dd4a48-8990-49bc-84c6-9722de32fdf4.png?v=1641378383&width=150"
                    alt="Tribe Logo"
                    className="logo"
                  />
                </a>
              </div>
              <div className="col d-flex justify-content-end gap-3">
                <a href="#">
                  <i className="bi bi-person-circle fs-3 text-dark"></i>
                </a>
                <a href="#">
                  <i className="bi bi-cart4 fs-3 text-dark"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Menu */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid justify-content-left">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${
                isMenuOpen ? "show" : ""
              } justify-content-left`}
            >
              <ul
                className="navbar-nav mx-auto text-center"
                style={{ gap: "20px" }}
              >
                {navData.map((item, index) => (
                  <li
                    key={index}
                    className="nav-item dropdown"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <a
                      className="nav-link dropdown-toggle"
                      href={item.path}
                      role="button"
                    >
                      <i className={item.icon}></i> {item.content}
                    </a>
                    {item.submenu && (
                      <ul
                        className={`dropdown-menu text-start ${
                          hoveredIndex === index ? "show" : ""
                        }`}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a className="dropdown-item" href={subItem.path}>
                              <i className={subItem.icon}></i> {subItem.content}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </>
    </>
  );
};

export default NavBar;
