import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

export default function Profile() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>

      {/* Navigation for nested routes */}
      <nav className="flex gap-4 mb-4">
        <Link className="text-blue-600 hover:underline" to="details">
          Details
        </Link>
        <Link className="text-blue-600 hover:underline" to="settings">
          Settings
        </Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
