

import React from 'react';
import './Theme.css';

const themesData = [
  {
    title: 'Glamorous Gala',
    description: 'Experience the glitz and glamour of a Hollywood-style gala event.',
    imageUrl: 'glamorous_gala.jpg',
  },
  {
    title: 'Enchanted Garden',
    description: 'Transform your event space into a magical, enchanted garden.',
    imageUrl: 'enchanted_garden.jpg',
  },
  {
    title: 'Retro Fiesta',
    description: 'Take a trip back in time with a vibrant and energetic retro-themed fiesta.',
    imageUrl: 'retro_fiesta.jpg',
  },
  
];

const Theme = () => {
  return (
    <div className="theme-page">
      <h2>Explore Our Event Themes</h2>
      <div className="theme-list">
        {themesData.map((theme, index) => (
          <div className="theme-item" key={index}>
            <img src={theme.imageUrl} alt={theme.title} />
            <div className="theme-details">
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theme;
