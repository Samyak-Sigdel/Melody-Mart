import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ImageCarousel.css';

const images = [
  {
    src: 'https://www.musicology.blog/wp-content/uploads/2024/02/eric_clapton_signe_main-2.jpg',
    quote: 'There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.',
    author: 'Nelson Mandela',
    option: 'Follow Your Passion Today!',
    path: '/guitar'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSi983zmZQl8GMUW3fvfrz8J-rP889JFmaebRx41QMwwyBnaz_8cThzSE7rM3xR5x5EE&usqp=CAU',
    quote: 'At times, Clapton plays so hard that he breaks his guitar strings. Audiences then wait patiently and slow clap while he changes them – The origin of his nickname Slowhand.',
    option: 'Get your guitar',
    path: '/guitar'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDG3kbdzlKPvRj0Nd0_p9PBoGYOkUIIrssAafKbdGyi9O-llv75YUx1jkdD97xTMeDdY&usqp=CAU',
    quote: 'A drum roll with just one stick is known as a ‘Gravity Roll’.',
    option: 'Try it out',
    path: '/drums'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8SOjf6fJMTKoh9wM9aoUMsV6XGPXdlmkIXMCHyHd_ODZCvrjXVrYPVKeCFzhlZeubps&usqp=CAU',
    quote: 'Believe in yourself.',
    option: 'Start today',
    path: '/guitar'
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds per image

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handle button click for navigation
  const handleNavigation = (path) => {
    navigate(path);

  // Handler to manually go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handler to manually go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="carousel-content">
              <p className="promoted">PROMOTED</p>
              <div className="carousel-quote">
                <h2>{image.quote}</h2>
                <p className="quote-author">- {image.author}</p>
              </div>
              <button
                className="carousel-button"
                onClick={() => handleNavigation(image.path)} // Navigate on button click
              >
                {image.option}
              </button>

              



            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
