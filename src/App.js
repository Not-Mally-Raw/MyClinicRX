// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import InventoryManagement from './components/InventoryManagement'; // Import the InventoryManagement component
import AlertSystem from './components/AlertSystem'; // Import the AlertSystem component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory-management" element={<InventoryManagement />} /> {/* Add this route */}
        <Route path="/alert-system" element={<AlertSystem />} /> {/* Add this route */}
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
