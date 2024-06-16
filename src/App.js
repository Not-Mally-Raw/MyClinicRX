// Import necessary modules from React and React Router
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import InventoryManagement from "./components/InventoryManagement";
import ExpiryTrackingPage from "./components/ExpiryTrackingPage";
import BookAppointmentComponent from "./components/BookAppointmentComponent";
import SignInForm from "./components/SignInForm";

// Define the main App component
function App() {
  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handler to set authentication status to true
  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    // Router component to handle navigation
    <Router>
      {/* Define routes within the Router */}
      <Routes>
        {/* Route for the root path, showing SignInForm if not authenticated, otherwise redirect to home */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <SignInForm onSignIn={handleSignIn} />
            )
          }
        />
        {/* Route for the home page, protected by authentication */}
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/" />}
        />
        {/* Route for inventory management, protected by authentication */}
        <Route
          path="/inventory-management"
          element={
            isAuthenticated ? <InventoryManagement /> : <Navigate to="/" />
          }
        />
        {/* Route for booking appointments, protected by authentication */}
        <Route
          path="/book-appointment"
          element={
            isAuthenticated ? <BookAppointmentComponent /> : <Navigate to="/" />
          }
        />
        {/* Route for expiry tracking, protected by authentication */}
        <Route
          path="/expiry-tracking"
          element={
            isAuthenticated ? <ExpiryTrackingPage /> : <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
}

// Export the App component as the default export
export default App;
