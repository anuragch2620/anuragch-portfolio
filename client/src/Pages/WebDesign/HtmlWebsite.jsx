import React, { useState, useEffect } from "react";
import "./Portfolio.css";

const HtmlWebsite = () => {
  const images = [
    "https://dipanshutech.com/wp-content/uploads/2024/08/Custom-Website-Design-Services-Greater-Noida.png",
    "https://dipanshutech.com/wp-content/uploads/2024/08/Best-Website-Design-Company-in-Greater-Noida-1.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 सेकंड बाद अगली इमेज

    return () => clearInterval(interval);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Best Leading Website Design Company",
      image:
        "https://dipanshutech.com/wp-content/uploads/2022/02/natures-boost.jpg",
      link: "https://dipanshutech.com/our-portfolio/best-leading-website-design-company/",
    },
    {
      id: 2,
      title: "Custom Website Designing in Greater Noida",
      image:
        "https://dipanshutech.com/wp-content/uploads/2024/10/terre-mere-.png",
      link: "https://dipanshutech.com/our-portfolio/custom-website-desining-in-greater-noida/",
    },
    {
      id: 3,
      title: "Best Website Designing Company",
      image:
        "https://dipanshutech.com/wp-content/uploads/2022/03/petz-copy.png",
      link: "https://dipanshutech.com/our-portfolio/best-website-designing-company/",
    },
  ];

  return (
    <>
      <section className="html-website-section" id="html-website">
        <div className="container p-5">
          <div className="row align-items-center html-website-row">
            {/* Left Side - Text Content */}
            <div
              className="col-lg-6 html-text-content"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h3 className="subtitle">
                HTML <span className="highlight">Website</span> Design
              </h3>
              <h2 className="title">
                Empowering Your <span className="highlight">Digital</span>{" "}
                Success
              </h2>
              <p className="description">
                At Dipanshu Tech, we understand that your website is the face of
                your business online. It’s the first impression potential
                customers get, and it plays a crucial role in whether they
                choose to do business with you.
              </p>
              <div className="cta-container">
                <a href="/contact-us/" className="btn-jaat2">
                  Get a Quote
                </a>
              </div>
            </div>

            {/* Right Side - Image Slider */}
            <div
              className="col-lg-6 html-image-slider"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <img
                id="slider-image"
                src={images[currentIndex]}
                alt="Website Design Preview"
                className="active"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="container">
          {/* Title Section */}
          <div className="text-center portfolio-header">
            <h4 className="portfolio-subtitle">Our Project</h4>
            <h3 className="portfolio-title">
              Driving Success with Innovative{" "}
              <span className="highlight">IT Solutions</span>
            </h3>
          </div>

          {/* Portfolio Grid */}
          <div className="row portfolio-row">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="col-md-6 col-lg-4 portfolio-item"
                data-aos="fade-up"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-card">
                    <div className="portfolio-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-5">
            <a href="/portfolio/web-designing/" className="btn-jaat">
              View More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HtmlWebsite;
