import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Instrument.css';

export const Instruments = () => {
  const instruments = [
    {
      name: 'Guitar',
      img: 'https://content.instructables.com/FN4/QHK2/JGMJCWPY/FN4QHK2JGMJCWPY.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=64e8c8fa0fb67334cc0b45f3409f0d11',
      description: 'Explore a variety of guitar collections, from classic and jazz styles to rock and pop, featuring both six-string and multi-string variations to suit every genre and player.'
    },
    {
      name: 'Piano',
      img: "https://i.pinimg.com/564x/f5/32/27/f53227feb202591ffa42b327f9414810.jpg",
      description: 'Discover a wide range of piano collections, from grand and upright pianos to digital models, suited for classical, jazz, pop, and beyond—perfect for musicians of all levels and styles.'
    },
    {
      name: 'Violin',
      img: 'https://i.pinimg.com/564x/8b/24/03/8b24038ff83ff27aa7dd2e2e5281b3d5.jpg',
      description: 'Explore diverse violin collections, from classic acoustic models to electric variations, ideal for genres like classical, folk, jazz, and more—crafted to suit musicians at every skill level.'
    },
    {
      name: 'Drums',
      img: 'https://www.superprof.com.au/blog/wp-content/uploads/2018/06/drums.jpg',
      description: 'Browse an extensive selection of drum sets, from acoustic kits to electronic options, perfect for genres like rock, jazz, pop, and more—designed for drummers of all experience levels.'
    },
    {
      name: 'Electric Guitar',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoBsPj6e8Bm--cpgvzDl5M3D2p9A_yluk7A&s',
      description: 'Discover a range of electric guitars, from classic models to modern designs, tailored for genres like rock, blues, jazz, and beyond—crafted to bring powerful sound and versatility to every player.'
    },
      {
      name: 'Flute',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhHzP3ebPra6cQ7nIBQISSz4js9IRamFKng&s',
      description: 'Explore an array of flutes, from traditional wooden to modern silver designs, ideal for classical, jazz, folk, and more—perfectly suited for players at all skill levels.'
    }
  ];

  return (
    <div className="main">
      <div className="instruments-grid">
        {instruments.map((instrument, index) => (
          <div className="instrument" key={index}>
            <Link to={`/${instrument.name.toLowerCase()}`} className="category-name">  {/* Add Link to navigate */}
              <p>{instrument.name}</p>
              <div className="img">
                <img src={instrument.img} alt={instrument.name} />
              </div>
              <div className="category-description">
                {instrument.description}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
