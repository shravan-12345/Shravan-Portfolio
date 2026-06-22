import { Navigate, Link, useLocation, Outlet } from "react-router-dom";

function AdminLayout() {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const linkStyle = (path) => ({
    display: "block",
    padding: "12px 15px",
    marginBottom: "10px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#cbd5e1",
    background: location.pathname === path ? "#4f46e5" : "transparent",
    boxShadow:
      location.pathname === path
        ? "0 0 15px rgba(99,102,241,0.4)"
        : "none",
    transition: "0.3s",
    fontWeight: "500",
  });

  return (
    <>
      <style>{`
        .admin-container {
          display: flex;
          min-height: 100vh;
          font-family: sans-serif;
        }

        .sidebar {
          width: 250px;
          background: #0f172a;
          color: white;
          padding: 20px;
          border-right: 1px solid #1e293b;
        }

        .sidebar h2 {
          margin-bottom: 30px;
          font-size: 20px;
        }

        .main {
          flex: 1;
          background: radial-gradient(circle at top, rgba(99,102,241,0.15), transparent 50%), #111827;
          padding: 20px;
        }

        .logout {
          margin-top: 30px;
          padding: 10px;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          transition: 0.3s;
        }

        .logout:hover {
          background: #dc2626;
        }
      `}</style>

      <div className="admin-container">

        {/* SIDEBAR */}
        <div className="sidebar">
          <h2>🚀 Admin Panel</h2>

          <Link
            to="/admin/dashboard"
            style={linkStyle("/admin/dashboard")}
          >
            📊 Dashboard
          </Link>

          <Link
            to="/admin/projects"
            style={linkStyle("/admin/projects")}
          >
            🚀 Projects
          </Link>

          <Link
            to="/admin/blogs"
            style={linkStyle("/admin/blogs")}
          >
            📝 Blogs
          </Link>

          <Link
            to="/admin/experience"
            style={linkStyle("/admin/experience")}
          >
            💼 Experience
          </Link>

          <Link
            to="/admin/education"
            style={linkStyle("/admin/education")}
          >
            🎓 Education
          </Link>

          <Link
            to="/admin/messages"
            style={linkStyle("/admin/messages")}
          >
            📩 Messages
          </Link>

          <Link
          to="/admin/certifications" style={linkStyle("/admin/certifications")}>
          🏆 Certifications
          </Link>

          <button
            className="logout"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="main">
          <Outlet />
        </div>

      </div>
    </>
  );
}

export default AdminLayout;