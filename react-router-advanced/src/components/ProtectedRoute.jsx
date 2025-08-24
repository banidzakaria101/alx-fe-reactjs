import React from "react";
import { Navigate } from "react-router-dom";

// Simulate authentication check
const isAuthenticated = () => localStorage.getItem("auth") === "true";

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the protected content if authenticated
  return children;
}
