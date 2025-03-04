const PortfolioSection = () => {
  const projects = [
    {
      title: "Global Education Consultant",
      link: "https://dipanshutech.com/our-portfolio/global-education-consultant/",
      imageSrc:
        "https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/12/Global-Education-Consultant-scaled.webp.bv.webp",
      alt: "Global Education Consultant",
    },
    {
      title: "Amrit Enterprises",
      link: "https://dipanshutech.com/our-portfolio/amrit-enterprises/",
      imageSrc:
        "https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/12/Amrit-Enterprises-scaled.webp.bv.webp",
      alt: "Amrit Enterprises",
    },
    {
      title: "Business Hub",
      link: "https://dipanshutech.com/our-portfolio/business-hub/",
      imageSrc:
        "https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/12/Business-Hub-scaled.webp.bv.webp",
      alt: "Business Hub",
    },
  ];

  return (
    <section className="portfolio-section" id="portfolioSection">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-title text-center">
              <h4 className="global_subtitle" id="portfolioSubtitle">
                <span className="sub-title">Our Project</span>
              </h4>
              <h3 className="global_title text-center">
                Driving Success with Innovative{" "}
                <span className="orange">IT Solutions</span>
              </h3>
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="row" id="portfolioProjects">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-sm-6 portfolio-item" key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="recent_projects">
                  <div className="portfolio_image_wrapper">
                    <img
                      src={project.imageSrc}
                      alt={project.alt}
                      className="portfolio-image img-fluid"
                    />
                    <div className="overlay">
                      <h6 className="overlay_title">{project.title}</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <a href="/portfolio/" className=" btn-jaat">
              View all Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
