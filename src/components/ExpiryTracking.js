// ExpiryTracking.js

import React, { useState } from 'react';
import Dataset from './Dataset';

const ExpiryTracking = () => {
  const [medications, setMedications] = useState([]);

  const handleDatasetLoaded = (data) => {
    // Assuming 'Expiry Tracking' functionality involves filtering or processing medication data
    setMedications(data);
    // Implement expiry tracking logic here if needed
    trackExpiryDates(data);
  };

  const trackExpiryDates = (data) => {
    // Example: Filter medications expiring within a week
    const today = new Date();
    const weekLater = new Date();
    weekLater.setDate(today.getDate() + 7);

    const expiringSoon = data.filter((med) => {
      const expiryDate = new Date(med['Expiry Date']);
      return expiryDate <= weekLater;
    });

    console.log('Expiring Soon:', expiringSoon);
    // Implement further actions based on expiringSoon
  };

  return (
    <div>
      <h2>Expiry Tracking</h2>
      <Dataset onDatasetLoaded={handleDatasetLoaded} />
      {/* Display expiry tracking information as needed */}
    </div>
  );
};

export default ExpiryTracking;
