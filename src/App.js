import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import InventoryManagement from './components/InventoryManagement';
import ExpiryTrackingPage from './components/ExpiryTrackingPage';
import BookAppointmentComponent from './components/BookAppointmentComponent';
import SignInForm from './components/SignInForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <SignInForm onSignIn={handleSignIn} />} />
        <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/inventory-management" element={isAuthenticated ? <InventoryManagement /> : <Navigate to="/" />} />
        <Route path="/book-appointment" element={isAuthenticated ? <BookAppointmentComponent /> : <Navigate to="/" />} />
        <Route path="/expiry-tracking" element={isAuthenticated ? <ExpiryTrackingPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
