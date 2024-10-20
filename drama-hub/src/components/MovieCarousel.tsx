import React, { useState, useEffect } from "react";
import wednesdayPoster from "../assets/images/wednesday_landscape.webp";
import strangerThingsPoster from "../assets/images/strangerThings_landscape.webp";
import marvelPoster from "../assets/images/Marvel.jpg";
import tomorrowlandPoster from "../assets/images/tomorrowland-2.jpg";

const posters = [
  { src: wednesdayPoster, alt: "Wednesday Movie Poster" },
  { src: strangerThingsPoster, alt: "Stranger Things Poster" },
  { src: marvelPoster, alt: "Marvel Movie Poster" },
  { src: tomorrowlandPoster, alt: "Tomorrowland Movie Poster" },
];

const MovieCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posters.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        {posters.map((poster, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={poster.src} alt={poster.alt} />
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default MovieCarousel;
