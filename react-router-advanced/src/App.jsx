import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Login from "./components/Login.jsx";

const isAuthenticated = () => localStorage.getItem("auth") === "true";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) return <Navigate to="/login" replace />;
  return children;
};

export default function App() {
  return (
    <Router>
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/123">Blog Post</Link>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
