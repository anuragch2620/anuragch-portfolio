import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://dipanshutech.com/wp-content/uploads/2024/08/logoclients7.webp",
  "https://dipanshutech.com/wp-content/uploads/2024/08/logoclients8.webp",
  "https://dipanshutech.com/wp-content/uploads/2024/08/2.png",
  "https://dipanshutech.com/wp-content/uploads/2024/08/logoclients5.webp",
  "https://dipanshutech.com/wp-content/uploads/2024/08/6.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKY9pswIQKykxlbWq_j1tUCKkewQ8Vv4wRg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyAPijfztovaGKUQQlhQgLsAKmX8xBg__nXg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrc300Mmh-zxgGtDEf9SQembt8pm6X9I8FoQ&s",
];

const ValuePartnerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="value-slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="value-slide-item">
            <img
              src={img}
              alt={`Partner ${index + 1}`}
              className="value-slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ValuePartnerSlider;
