import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Already logged in
  if (localStorage.getItem("token")) {
    return <Navigate to="/admin" />;
  }

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/admin");
    } catch (error) {
      console.error("Login Error:", error);

      alert(
        error.response?.data?.message ||
          "Login Failed. Please check your credentials."
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(99,102,241,0.15), transparent 50%), #0a0a0a",
      }}
    >
      <form
        onSubmit={login}
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(99, 102, 241, 0.35)",
          padding: "30px",
          borderRadius: "12px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2 style={{ color: "#fff", textAlign: "center" }}>
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #334155",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #334155",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            background: "#4f46e5",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;