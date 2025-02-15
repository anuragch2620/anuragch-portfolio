import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for Buttons

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0); // Current Announcement Index

  const announcements = [
    "🚀 Big Sale! Get 50% Off on all products!",
    "🔥 New Arrivals: Check out our latest collection!",
    "📢 Free Shipping on orders above $99!",
  ];

  // Function to navigate Left
  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
    );
  };

  // Function to navigate Right
  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-dark text-white py-2">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Button */}
          <div className="col-auto">
            <button className="btn btn-light" onClick={handlePrev}>
              <FaChevronLeft />
            </button>
          </div>

          {/* Announcement Text */}
          <div className="col text-center">
            <h6 className="m-0">{announcements[index]}</h6>
          </div>

          {/* Right Button */}
          <div className="col-auto">
            <button className="btn btn-light" onClick={handleNext}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementBar;
