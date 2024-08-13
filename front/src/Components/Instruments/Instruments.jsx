import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Instrument.css';

export const Instruments = () => {
  const instruments = [
    {
      name: 'Guitar',
      img: 'https://content.instructables.com/FN4/QHK2/JGMJCWPY/FN4QHK2JGMJCWPY.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=64e8c8fa0fb67334cc0b45f3409f0d11',
      description: 'The guitar is a versatile stringed instrument that has played a central role in various music genres, from classical and jazz to rock and pop. It typically features six strings, though variations exist with different numbers of strings.'
    },
    {
      name: 'Piano',
      img: "https://i.pinimg.com/564x/f5/32/27/f53227feb202591ffa42b327f9414810.jpg",
      description: 'The piano is a large keyboard musical instrument with a wooden case enclosing a soundboard and metal strings, which are struck by hammers when the keys are pressed.'
    },
    {
      name: 'Violin',
      img: 'https://i.pinimg.com/564x/8b/24/03/8b24038ff83ff27aa7dd2e2e5281b3d5.jpg',
      description: 'The violin is a string instrument which has four strings and is played with a bow. It is the smallest and highest-pitched instrument in the violin family of string instruments.'
    },
    {
      name: 'Drums',
      img: 'https://www.superprof.com.au/blog/wp-content/uploads/2018/06/drums.jpg',
      description: 'Drums are percussion instruments and are the oldest form of instruments, existing in a wide variety of shapes and sizes and producing sounds through vibrations created when struck.'
    },
    {
      name: 'Electric Guitar',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoBsPj6e8Bm--cpgvzDl5M3D2p9A_yluk7A&s',
      description: 'The electric guitar is a guitar that uses one or more pickups to convert the vibration of its strings into electrical signals, which ultimately are reproduced as sound by loudspeakers.'
    },
    {
      name: 'Flute',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhHzP3ebPra6cQ7nIBQISSz4js9IRamFKng&s',
      description: 'The flute is a family of musical instruments in the woodwind group. Unlike woodwind instruments with reeds, a flute is an aerophone or reedless wind instrument that produces its sound from the flow of air across an opening.'
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
