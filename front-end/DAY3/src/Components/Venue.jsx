

import React from 'react';
import './Venue.css';

const venuesData = [
  {
    name: 'Elegant Ballroom',
    capacity: 'Up to 300 guests',
    location: 'City Center',
    imageUrl: 'elegant_ballroom.jpg',
    description:
      'Our elegant ballroom is perfect for grand celebrations. With its spacious layout and luxurious decor, it creates a sophisticated atmosphere for your special event.',
  },
  {
    name: 'Sunset Beach Resort',
    capacity: 'Up to 150 guests',
    location: 'Seaside Location',
    imageUrl: 'sunset_beach_resort.jpg',
    description:
      'Host your event at our beachfront resort. The stunning views, sandy shores, and fresh sea breeze provide a picturesque setting for any occasion.',
  },
  {
    name: 'Downtown Nightclub',
    capacity: 'Up to 200 guests',
    location: 'City Nightlife Hub',
    imageUrl: 'downtown_nightclub.jpg',
    description:
      'For those who love to dance and enjoy a vibrant atmosphere, our downtown nightclub venue is the ideal choice. Neon lights and energetic beats set the stage for a memorable night.',
  },
  
];

const Venue = () => {
  return (
    <div className="venue-page">
      <h2>Discover Our Venues</h2>
      <div className="venue-list">
        {venuesData.map((venue, index) => (
          <div className="venue-item" key={index}>
            <img src={venue.imageUrl} alt={venue.name} />
            <div className="venue-details">
              <h3>{venue.name}</h3>
              <p>
                <strong>Capacity:</strong> {venue.capacity}
              </p>
              <p>
                <strong>Location:</strong> {venue.location}
              </p>
              <p>{venue.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venue;
