import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile", { replace: true });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Login Page</h2>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Login
      </button>
    </div>
  );
}
