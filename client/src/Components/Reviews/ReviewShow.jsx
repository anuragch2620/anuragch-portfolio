import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const reviews = [
  {
    text: "If you are looking to have a new website created or revamped, then I would highly recommend DipanshuTech. They bring a vast knowledge of innovative ideas, creative solutions, and also many job opportunities...",
    name: "Utkarsh",
    image:
      "https://dipanshutech.com/wp-content/uploads/al_opt_content/IMAGE/dipanshutech.com/wp-content/uploads/2024/08/quote-icon.png.bv.webp",
  },
  {
    text: "DipanshuTech exceeded our expectations! The team was highly professional and delivered a sleek, responsive website that truly represents our brand. We couldn’t be happier with the results!",
    name: "Priya Sharma",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
  },
  {
    text: "Exceptional service and amazing attention to detail. They transformed our online presence, making our website more user-friendly and visually appealing. Highly recommended!",
    name: "Rahul Verma",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
  },
];

const ReviewShow = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentReview]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="container py-5">
      {/* Header Section */}
      <h1 className="text-center fw-bold mb-4">What Our Clients Say</h1>

      {/* Review Section */}
      <div className="position-relative  text-center">
        <div className="row align-items-center">
          {/* Previous Button */}
          <div className="col-md-1 d-flex justify-content-center">
            <button
              className="btn btn-outline-dark rounded-circle"
              onClick={prevReview}
            >
              <i className="bi bi-chevron-left fs-3"></i>
            </button>
          </div>

          {/* Review Content */}
          <div className="col-md-10">
            <div className="p-4 bg-white rounded shadow-lg">
              <img
                src={reviews[currentReview].image}
                alt="Quote Icon"
                className="mb-3"
                style={{ width: "50px" }}
              />
              <p className="fst-italic text-secondary">
                {reviews[currentReview].text}
              </p>
              <div className="mb-2">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className="bi bi-star-fill text-warning fs-5 mx-1"
                  ></i>
                ))}
              </div>
              <h5 className="fw-bold">{reviews[currentReview].name}</h5>
            </div>
          </div>

          {/* Next Button */}
          <div className="col-md-1 d-flex justify-content-center">
            <button
              className="btn btn-outline-dark rounded-circle"
              onClick={nextReview}
            >
              <i className="bi bi-chevron-right fs-3"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewShow;
