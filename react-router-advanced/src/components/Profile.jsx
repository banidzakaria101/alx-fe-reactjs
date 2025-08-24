import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      <nav className="flex gap-4 mb-4">
        <Link className="text-blue-600" to="details">Details</Link>
        <Link className="text-blue-600" to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
