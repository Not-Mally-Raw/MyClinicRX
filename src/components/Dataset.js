// src/components/Dataset.js

import React, { useState } from 'react';
import Papa from 'papaparse';
import './Dataset.css';

const Dataset = ({ onDatasetLoaded }) => {
  const [medications, setMedications] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setMedications(result.data);
          if (typeof onDatasetLoaded === 'function') {
            onDatasetLoaded(result.data);
          }
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        }
      });
    }
  };

  return (
    <div className="dataset-container">
      <h2>Medication Dataset</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {medications.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Dosage</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((med, index) => (
              <tr key={index}>
                <td>{med['Medicine Name']}</td>
                <td>{med.Dosage}</td>
                <td>{med.Quantity}</td>
                <td>{med['Expiry Date']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dataset;
