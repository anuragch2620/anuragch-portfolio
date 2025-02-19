import React, { useState, useEffect } from 'react';
import '../Css/Home.css'; // Import the CSS file

const images = [
  "https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/11/Leading-Mobile-App-Services-In-Greater-Noida.webp.bv.webp",
  "https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/11/Business-Portals-Development-Company-in-Greater-Noida.webp.bv.webp",
  "https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/11/Leading-Mobile-App-Services-In-Greater-Noida.webp.bv.webp"
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
  <>
    <section className="main_banner desktop-viewcls">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image Slider */}
          <div className="col-lg-6 pb-3 pb-md-0" data-aos="fade-right" data-aos-duration="500">
            <div className="slider-container">
              <img 
                src={images[currentImageIndex]} 
                className="img-fluid slider-image" 
                alt="Dynamic Changing Image"
              />
            </div>
          </div>  

          {/* Right Side - Static Content */}
          <div className="col-lg-6 col-md-7 pb-5 pb-md-0" data-aos="fade-left" data-aos-duration="500">
            <h1 className="banner_title mb-3 d-none">Website and Mobile App Development Company in Greater Noida</h1> 
            <h2 className="banner_subtitle mb-2">Honest, Trustworthy, and Committed to Excellence</h2>
            <h2 className="banner_title mb-3">Empowering Your <span className="black">Digital</span> Success</h2>
            <p>At Silk Site Nation, we are committed to creating innovative and customized web solutions that propel your success. Partner with us to elevate your online presence and achieve your digital goals with precision and creativity.</p>

            <img 
              src="https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/08/review-3.png.bv.webp" 
              className="img-fluid banner_review" 
              alt="Best Website Design Services In Greater Noida" 
            />
          </div>
        </div>
      </div>
    </section>

    {/* // 2 sec  */}

    <section className="winning_award">
      <div className="container">
        <div className="row">
          
          {/* Experience */}
          <div className="col-lg-3 col-md-6 pb-2 pt-2 pb-0 col-sm-6 col-12">
            <div className="d-flex align-items-center gap-3">
              <div className="winner-icon">
                <img 
                  src="https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/08/exp-min-1.png.bv.webp" 
                  alt="16 Years Experience" 
                />
              </div>
              <div className="winner-heading">
                <p className="fs-15"><strong>16 years</strong> + Experience</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="col-lg-3 col-md-6 pb-2 pt-2 pb-0 col-sm-6 col-12">
            <div className="d-flex align-items-center gap-3">
              <div className="winner-icon">
                <img 
                  src="https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/08/projects-1-1.png.bv.webp" 
                  alt="3500+ Projects"
                />
              </div>
              <div className="winner-heading">
                <p className="fs-15"><strong>3500 +</strong> above Projects</p>
              </div>
            </div>
          </div>

          {/* Industry Served */}
          <div className="col-lg-3 col-md-6 pb-2 pt-2 pb-0 col-sm-6 col-12">
            <div className="d-flex align-items-center gap-3">
              <div className="winner-icon">
                <img 
                  src="https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/08/industry-1-1.png.bv.webp" 
                  alt="500+ Industry Served"
                />
              </div>
              <div className="winner-heading">
                <p className="fs-15"><strong>500+</strong> Industry Served</p>
              </div>
            </div>
          </div>

          {/* Client Retention */}
          <div className="col-lg-3 col-md-6 pb-2 pt-2 pb-0 col-sm-6 col-12">
            <div className="d-flex align-items-center gap-3">
              <div className="winner-icon">
                <img 
                  src="https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/08/clients-min-1.png.bv.webp" 
                  alt="90% Client Retention"
                />
              </div>
              <div className="winner-heading">
                <p className="fs-15"><strong>90%</strong> Client Retention</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* 3 sec  */}

    <section className="about_us section-space">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Image Section */}
          <div className="col-md-6">
            <img 
              src="https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/12/about-us-1.webp.bv.webp" 
              className="img-fluid about_us_image" 
              alt="Best Website Design Company in Greater Noida" 
            />
          </div>

          {/* Content Section */}
          <div className="col-md-6">
            <div className="mb-3">
              <h4 className="global_subtitle">
                <span className="sub-title">About Our Company</span>
              </h4>
              <h3 className="global_title">
                Who <span className="orange">we are</span>
              </h3>
            </div>

            <p>
              Based in Greater Noida, Silk Site Nation is a leading web design and development company known for our 
              creative and innovative website design services. We cater to a diverse range of clients, including businesses, 
              organisations, agencies, brands, institutions, individuals, corporate entities, and government projects.
            </p>

            <p>
              With over 16 years of industry experience, we specialise in creating impressive, responsive web designs that 
              deliver an optimal user experience across all devices—whether it’s a laptop, smartphone, or desktop computer. 
              Our commitment goes beyond aesthetics; we focus on developing websites that are optimised for search engines, 
              helping SMEs achieve higher rankings on Google.
            </p>

            <p>
              Having completed over 6,500+ projects in the past 16+ years, we are dedicated to excellence in every project we undertake.
            </p>

            <div className="pt-3 aboutbtnright">
              <a href="/about-us/" className="btn btn-primary ">More About Us</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* sec 4  */}
    

   
  </>
  );
};

export default Home;
