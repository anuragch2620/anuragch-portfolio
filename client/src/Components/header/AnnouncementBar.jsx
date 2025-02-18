import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  const announcements = [
    "🚀 Big Sale! Get 50% Off on all products!",
    "🔥 New Arrivals: Check out our latest collection!",
    "📢 Free Shipping on orders above $99!",
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="announcement-bar bg-dark text-white py-2">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Left Button */}
          <div className="col-auto">
            <button
              className="btn btn-outline-light rounded-circle shadow"
              onClick={handlePrev}
            >
              <FaChevronLeft />
            </button>
          </div>

          {/* Announcement Text with animation */}
          <div className="col text-center">
            <h6 className="m-0 announcement-text">{announcements[index]}</h6>
          </div>

          {/* Right Button */}
          <div className="col-auto">
            <button
              className="btn btn-outline-light rounded-circle shadow"
              onClick={handleNext}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .announcement-bar {
            position: relative;
            overflow: hidden;
          }
          .announcement-text {
            font-size: 1.1rem;
            font-weight: 500;
            transition: opacity 0.5s ease-in-out;
            animation: fadeIn 0.5s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .btn {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease-in-out;
          }
          .btn:hover {
            transform: scale(1.1);
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.4);
          }
        `}
      </style>
    </section>
  );
};

export default AnnouncementBar;
