import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import FAQ from "../../Components/Faq";
import ReviewShow from "../../Components/Reviews/ReviewShow";

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

  const lifeCycleSteps = [
    {
      id: 1,
      title: "Designing",
      imgSrc:
        "https://dipanshutech.com/wp-content/uploads/2024/08/Designing.png",
      bgColor: "#FFEBEE",
    },
    {
      id: 2,
      title: "Development",
      imgSrc:
        "https://dipanshutech.com/wp-content/uploads/2024/08/Development-2.png",
      bgColor: "#E3F2FD",
    },
    {
      id: 3,
      title: "Maintenance",
      imgSrc:
        "https://dipanshutech.com/wp-content/uploads/2024/08/Maintenance-2.png",
      bgColor: "#E8F5E9",
    },
    {
      id: 4,
      title: "Planning",
      imgSrc:
        "https://dipanshutech.com/wp-content/uploads/2024/08/Planning-2.png",
      bgColor: "#FFF3E0",
    },
    {
      id: 5,
      title: "Research And Development",
      imgSrc:
        "https://dipanshutech.com/wp-content/uploads/2024/08/Research-and-Development-3.png",
      bgColor: "#F3E5F5",
    },
    {
      id: 6,
      title: "Testing",
      imgSrc:
        "https://dipanshutech.com/wp-content/uploads/2024/08/Testing-2.png",
      bgColor: "#E0F7FA",
    },
    {
      id: 7,
      title: "Understanding Client Requirements",
      imgSrc:
        "https://dipanshutech.com/wp-content/uploads/2024/08/understanding-client-requirements-2.png",
      bgColor: "#FBE9E7",
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

      <section className="about_us section-space">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Image */}
            <div
              className="col-md-6 mb-3 mb-md-0"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <img
                src="https://dipanshutech.com/wp-content/uploads/2024/08/Leading-Mobile-App-Services-Greater-Noida.png"
                className="img-fluid about_service"
                alt="Leading Mobile App Services Greater Noida"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>

            {/* Right Side - Text */}
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <div className="mb-3">
                <h4 className="global_subtitle">
                  <span className="sub-title">Why Select Anurag Dev </span>
                </h4>
                <h3 className="global_title">
                  For Your HTML Website Design Needs?
                </h3>
              </div>
              <p>
                For all your HTML website design needs, we create clean, modern,
                and responsive designs tailored to your brand. From layouts to
                styling, our designs ensure a seamless user experience across
                devices. Let’s bring your vision to life on the web!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="services_section">
        <div className="container">
          {/* Section Title */}
          <div className="row justify-content-center">
            <div className="col-md-7 text-center">
              <div className="mb-3">
                <h4 className="services_subtitle">
                  <span className="services_sub_title">
                    Why Choose HTML Website Design for Your Next Project?
                  </span>
                </h4>
                <h3 className="services_title">
                  Advantages of Using HTML Website Design
                </h3>
              </div>
            </div>
          </div>

          {/* Services Cards */}
          <div className="row">
            {/* Service Box 1 */}
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className="service_card">
                <div className="service_icon">
                  <img
                    src="https://dipanshutech.com/wp-content/uploads/2024/08/web-design-1-2.png"
                    className="img-fluid"
                    alt="Core Features of HTML Web Design"
                  />
                </div>
                <h6 className="service_card_title">
                  Core Features of HTML Web Design
                </h6>
                <ul className="service_list">
                  <li>4 pages</li>
                  <li>Responsive Layout</li>
                  <li>SEO Optimization</li>
                  <li>Cross-Browser Compatibility</li>
                  <li>Clean and Semantic Code</li>
                  <li>Fast Load Times</li>
                </ul>
              </div>
            </div>

            {/* Service Box 2 */}
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="service_card">
                <div className="service_icon">
                  <img
                    src="https://dipanshutech.com/wp-content/uploads/2024/08/web-design-1-2.png"
                    className="img-fluid"
                    alt="Advanced Features of HTML Web Design"
                  />
                </div>
                <h6 className="service_card_title">
                  Advanced Features of HTML Web Design
                </h6>
                <ul className="service_list">
                  <li>7 pages</li>
                  <li>Parallax Scrolling and Visual Effects</li>
                  <li>Lazy Loading for Images and Videos</li>
                  <li>Advanced Animations and Transitions</li>
                  <li>CSS Grid and Flexbox Layouts</li>
                  <li>Interactive Forms with Validation</li>
                </ul>
              </div>
            </div>

            {/* Service Box 3 */}
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <div className="service_card">
                <div className="service_icon">
                  <img
                    src="https://dipanshutech.com/wp-content/uploads/2024/08/web-design-1-2.png"
                    className="img-fluid"
                    alt="Benefits of Using HTML Web Design"
                  />
                </div>
                <h6 className="service_card_title">
                  Benefits of Using HTML Web Design
                </h6>
                <ul className="service_list">
                  <li>10 pages</li>
                  <li>Easy to Learn and Use</li>
                  <li>SEO-Friendly</li>
                  <li>Responsive Design Capabilities</li>
                  <li>Scalable and Extensible</li>
                  <li>Customizable and Flexible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing_section">
        <div className="pricing_container">
          {/* Section Title */}
          <div className="pricing_header">
            <h4 className="pricing_subtitle">
              <span className="pricing_subtitle_text">Flexible Plans</span>
            </h4>
            <h3 className="pricing_title">
              Pricing Made <span className="pricing_highlight">Simple</span>
            </h3>
          </div>

          {/* Pricing Plans */}
          <div className="pricing_grid">
            {/* Plan 1 - Template-Based Design */}
            <div
              className="pricing_card"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <div className="pricing_card_wrapper">
                <h3 className="pricing_card_title">Template-Based Design</h3>
                <h2 className="pricing_card_price">Starting at</h2>
                <h2 className="pricing_card_price">₹10k or $150</h2>
                <p className="pricing_card_desc">Core development</p>
                <div className="pricing_card_features">
                  <span>
                    <i className="fa fa-angle-double-right"></i>
                    Uses pre-made templates, basic customization, and a faster
                    turnaround.
                  </span>
                  <span>
                    <i className="fa fa-angle-double-right"></i>
                    Ideal for small businesses, portfolios, and informational
                    sites.
                  </span>
                </div>
                <a href="/contact-us/" className="pricing_button">
                  Get Started
                  <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>

            {/* Plan 2 - Custom Design */}
            <div
              className="pricing_card pricing_active"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="pricing_card_wrapper">
                <h3 className="pricing_card_title">Custom Design</h3>
                <h2 className="pricing_card_price">Starting at</h2>
                <h2 className="pricing_card_price">₹18k or $225</h2>
                <p className="pricing_card_desc">All Basic features</p>
                <div className="pricing_card_features">
                  <span>
                    <i className="fa fa-angle-double-right"></i>
                    Fully unique design tailored to your brand with custom
                    graphics, layouts.
                  </span>
                  <span>
                    <i className="fa fa-angle-double-right"></i>
                    Suitable for businesses seeking a strong brand identity.
                  </span>
                </div>
                <a href="/contact-us/" className="pricing_button">
                  Get Started
                  <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>

            {/* Plan 3 - Advanced Design */}
            <div
              className="pricing_card"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <div className="pricing_card_wrapper">
                <h3 className="pricing_card_title">Advanced Design</h3>
                <h2 className="pricing_card_price">Starting at</h2>
                <h2 className="pricing_card_price">₹30k or $450</h2>
                <p className="pricing_card_desc">All Premium features</p>
                <div className="pricing_card_features">
                  <span>
                    <i className="fa fa-angle-double-right"></i>
                    Features custom design, advanced elements, and API
                    integration.
                  </span>
                  <span>
                    <i className="fa fa-angle-double-right"></i>
                    Perfect for businesses needing a dynamic, scalable,
                    feature-rich website.
                  </span>
                </div>
                <a href="/contact-us/" className="pricing_button">
                  Get Started
                  <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="life_cycle_section">
        <div className="life_cycle_container">
          {/* Section Title */}
          <div className="life_cycle_header">
            <h3 className="life_cycle_title">
              Web Development{" "}
              <span className="life_cycle_highlight">Life Cycle</span>
            </h3>
            <p className="life_cycle_subtext">
              The Seven Steps Of Developing A Website
            </p>
          </div>

          {/* Life Cycle Steps */}
          <div className="life_cycle_grid">
            {lifeCycleSteps.map((step) => (
              <div key={step.id} className="life_cycle_wrapper">
                {/* Card with Icon */}
                <div
                  className="life_cycle_card aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  style={{ backgroundColor: step.bgColor }}
                >
                  <div className="life_cycle_icon">
                    <img
                      src={step.imgSrc}
                      className="img-fluid"
                      alt={step.title}
                    />
                  </div>
                </div>

                {/* Title Below the Card */}
                <p className="life_cycle_step_title">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <FAQ />
        <ReviewShow />
      </div>
    </>
  );
};

export default HtmlWebsite;
