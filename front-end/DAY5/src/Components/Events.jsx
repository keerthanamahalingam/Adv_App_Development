

import React from 'react';
import './Events.css'; 


import image1 from '../image1.jpg';
import image2 from '../image2.jpg';
import image3 from '../image3.jpg';
import image4 from '../image4.jpg';
import image5 from '../image5.jpg';
import image6 from '../image6.jpg';
import image7 from '../image7.jpg';
import image8 from '../image8.jpg';

const events = [
    { id: 1, image: image1, title: 'BIRTHDAY PARTIES' },
    { id: 2, image: image2, title: 'WEDDING RECEPTION' },
    { id: 3, image: image3, title: 'BABY SHOWER' },
    { id: 4, image: image4, title: 'ANNIVERSARY CELEBRATIONS' },
    { id: 5, image: image5, title: 'HOLIDAY PARTIES' },
    { id: 6, image: image6, title: 'BACHELOR PARTIES' },
    { id: 7, image: image7, title: 'SURPRISE PARTIES' },
    { id: 8, image: image8, title: 'CULTURAL CELEBRATIONS' },
  ];


const Events = () => {
  return (
    
   
    
    <div className="event-grid">
      {events.map(event => (
        <div key={event.id} className="event-card">
          <img src={event.image} alt={event.title} />
          <h3>{event.title}</h3>
        </div>
      ))}
    </div>
    
  );
};

export default Events;


