import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ImageCarousel.css';



const images = [
  {
    src: 'https://www.musicology.blog/wp-content/uploads/2024/02/eric_clapton_signe_main-2.jpg',
    quote: 'There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.',
    author: 'Nelson Mandela',
    option: 'Follow Your Passion Today!',
    path: '/category'
  },
  {
    src: 'https://i.ytimg.com/vi/ni9w01KpgCU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEIgTChyMA8=&rs=AOn4CLBKZ7XaMGwDQo9XnQCkffZqs6s0mw',
    quote: 'At times, Clapton plays so hard that he breaks his guitar strings. Audiences then wait patiently and slow clap while he changes them – The origin of his nickname Slowhand.',
    option: 'Get your guitar',
    path: '/guitar'
  },
  {
    src: 'https://i.pinimg.com/564x/ad/28/be/ad28be3dae0e7e3258e0f205402fb319.jpg',
    quote: 'A drum roll with just one stick is known as a ‘Gravity Roll’ or a ‘Gravity Blast’. The drummer rests the stick on the rim & constantly pushes the back of the stick up and down to create a drum roll.’.',
    option: 'Try it out',
    path: '/drums'
  },
  {
    src: 'https://i.ebayimg.com/images/g/qpEAAOSw~EJi0hmf/s-l1600.webp',
    quote: 'Einstein once said, “Life without playing music is inconceivable to me. I live my daydreams in music. I see my life in terms of music... I get most joy in life out of music”. And as it turned out, Einstein was right.',
    option: 'Start today',
    path: '/violin'
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 5 seconds per image

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
