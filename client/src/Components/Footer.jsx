import React from "react";
import "../Css/footer.css";

const Footer = () => {
  return (
    <>
      <section className=".ssn_footer bg-dark  text p-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4 pb-5 pb-lg-0">
              <div className="contact_info">
                <div className="contact_icons">
                  <i className="fa fa-map-marker"></i>
                </div>
                <h6 className="contact_title">Find us</h6>
                <p className="fs-15">
                  <a target="_blank" rel="noopener noreferrer" href="">
                    H-23 , Sector-11, Pratap Vihar ,Ghaziabad . (201009)
                  </a>
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 pb-5 pb-lg-0">
              <div className="contact_info">
                <div className="contact_icons">
                  <i className="fa fa-phone"></i>
                </div>
                <h6 className="contact_title">Call us</h6>
                <ul className="m-0 p-0">
                  <li className="d-block fs-15">
                    <a href="tel:+919971553424">+91 9990066707</a>
                  </li>
                  <li className="d-block fs-15">
                    <a href="tel:+911204265505">+91 9958858633</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 pb-5 pb-lg-0">
              <div className="contact_info">
                <div className="contact_icons">
                  <i className="fa fa-envelope"></i>
                </div>
                <h6 className="contact_title">Mail us</h6>
                <ul className="m-0 p-0">
                  <li className="d-block fs-15">
                    <a href="mailto:anuragch2620@gmail.com">
                      anuragch2620@gmail.com
                    </a>
                  </li>
                  <li className="d-block fs-15">
                    <a href="mailto:info@support.com">info@support.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <hr style={{ backgroundColor: "#fff" }} />
            </div>
          </div>
        </div>

        <div className="container bottom_footer text-white">
          <div className="row">
            <div className="col-lg-4 pb-4 pb-lg-0 col-md-6">
              <div className="footer_logo mb-4">
                <a href="" className="logo">
                  <img
                    src="https://www.ultratribe.com/cdn/shop/files/Tribe_Lo49bc-84c6-9722de32fdf4.png?v=1641378383&width=150"
                    className="img-fluid"
                    alt="Tribe Logo"
                  />
                </a>
              </div>
              <p>
                Silk Site Nation in Greater Noida offers top app and web design
                solutions with exclusive discounts.
              </p>
              <ul className="social_links m-0 p-0">
                <li className="d-inline pe-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/DipanshuTECHSolutionsPvtLtd"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="d-inline pe-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/DIPANSHUTECH"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="d-inline pe-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/dipanshutech/"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="d-inline pe-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://in.linkedin.com/company/dipanshutech"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="d-inline pe-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UCcXUqpn3lTeAobtnVeUmc8w"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 pb-4 pb-lg-0">
              <h3 className="footer_title">Useful Links</h3>
              <ul className="footer_link m-0 p-0 quick_links">
                <li className="fs-14 light-white">
                  <a href="">Home</a>
                </li>
                <li className="fs-14 light-white">
                  <a href="">About Us</a>
                </li>
                <li className="fs-14 light-white">
                  <a href="/services/">Services</a>
                </li>
                <li className="fs-14 light-white">
                  <a href="">Teams</a>
                </li>
                <li className="fs-14 light-white">
                  <a href="">Blog</a>
                </li>
                <li className="fs-14 light-white">
                  <a href="">Testimonials</a>
                </li>
                <li className="fs-14 light-white">
                  <a href="/portfolio/">Portfolio</a>
                </li>
                <li className="fs-14 light-white">
                  <a href="">Pricing</a>
                </li>
                <li className="fs-14 light-white">
                  <a href="">Contact Us</a>
                </li>
                <li className="fs-14 light-white">
                  <a href="">Video Editing</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-md-6">
              <h3 className="footer_title">Our Reach</h3>
              <div className="review_image mb-4">
                <img
                  src="https://dipanshutech.com/wp-content/uploads/2024/08/review.png"
                  className="img-fluid"
                  alt="review"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
