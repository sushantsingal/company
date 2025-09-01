import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 🧭 Import useNavigate

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // 🧭 Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/login`, {
        email,
        password,
      });
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin"); // ✅ Redirect after successful login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-200 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6 border border-pink-100"
      >
        <h2 className="text-2xl font-bold text-pink-600 text-center">Admin Login</h2>

        {error && (
          <div className="text-sm text-red-500 text-center bg-red-50 py-2 px-4 rounded">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-semibold py-2.5 rounded-xl hover:bg-pink-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;