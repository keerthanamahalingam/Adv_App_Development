
import React, { useState } from 'react';

const BookingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleBooking = () => {
    
    console.log('Booking Details:', { name, email, selectedPackage });
  };

  return (
    <div>
      <h1 className='Booking'>Book Your Event</h1>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Select Package:
          <select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)}>
            <option value="">Select a package</option>
            <option value="basic">Basic Package</option>
            <option value="standard">Standard Package</option>
            <option value="premium">Premium Package</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={handleBooking}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
