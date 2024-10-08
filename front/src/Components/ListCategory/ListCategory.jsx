import React from 'react'
import { Link } from 'react-router-dom';
import './ListCategory.css'

export const ListCategory = () => {
    const instruments = [
        {
          name: 'Guitar',
          img: 'https://content.instructables.com/FN4/QHK2/JGMJCWPY/FN4QHK2JGMJCWPY.jpg?auto=webp&frame=1&width=1024&height=1024&fit=bounds&md=64e8c8fa0fb67334cc0b45f3409f0d11',
          description: 'View More',
        },
        {
          name: 'Piano',
          img: "https://i.pinimg.com/564x/f5/32/27/f53227feb202591ffa42b327f9414810.jpg",
          description: 'View More',
        },
        {
          name: 'Violin',
          img: 'https://i.pinimg.com/564x/8b/24/03/8b24038ff83ff27aa7dd2e2e5281b3d5.jpg',
          description: 'View More',
        },
        {
          name: 'Drums',
          img: 'https://www.superprof.com.au/blog/wp-content/uploads/2018/06/drums.jpg',
          description: 'View More',
        }
    ];
  return (
    <div className="main">
      <div className="ins-grid">
        {instruments.map((instrument, index) => (
          <div className="ins" key={index}>
            <Link to={`/${instrument.name.toLowerCase()}`} className="cat-name">  {/* Add Link to navigate */}
              <div className="image">
                <img src={instrument.img} alt={instrument.name} />
              </div>
              <p>{instrument.name}</p>
              <div className="cat-des">
                {instrument.description}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
