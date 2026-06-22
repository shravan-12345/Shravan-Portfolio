import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    blogs: 0,
    projects: 0,
    messages: 0,
    experience: 0,
    education: 0,
    certifications: 0,
  });

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");

        const [
          blogsRes,
          projectsRes,
          experienceRes,
          educationRes,
          messagesRes,
          certificationsRes,
        ] = await Promise.all([
          api.get("/blogs"),
          api.get("/projects"), // ✅ FIXED
          api.get("/experience"),
          api.get("/education"),
          api.get("/contact", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
           api.get("/certifications"),
        ]);

        setStats({
          blogs: blogsRes?.data?.length || 0,
            projects:
            projectsRes?.data?.projects?.length ||
            projectsRes?.data?.length ||
             0,
          experience: experienceRes?.data?.length || 0,
          education: educationRes?.data?.length || 0,
          messages: messagesRes?.data?.length || 0,
          certifications: certificationsRes?.data?.length || 0
        });
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  return (
    <div style={styles.dashboard}>
      {/* Top Bar */}
      <div style={styles.topbar}>
        <div>
          <h1 style={{ margin: 0 }}>📊 Dashboard</h1>

          <p style={{ color: "#94a3b8" }}>
            Welcome back, Shravan 👋
          </p>

          <p style={{ color: "#64748b", fontSize: "14px" }}>
            {new Date().toLocaleDateString()}
          </p>
        </div>

        <button
          style={styles.logoutBtn}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <p style={{ color: "#94a3b8" }}>Loading dashboard...</p>
      )}

      {/* Stats Cards */}
      <div style={styles.stats}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>📝 Total Blogs</h3>
          <p style={styles.cardValue}>{stats.blogs}</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🚀 Projects</h3>
          <p style={styles.cardValue}>{stats.projects}</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>📩 Messages</h3>
          <p style={styles.cardValue}>{stats.messages}</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>💼 Experience</h3>
          <p style={styles.cardValue}>{stats.experience}</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🎓 Education</h3>
          <p style={styles.cardValue}>{stats.education}</p>
        </div>

        <div style={styles.card}>
        <h3 style={styles.cardTitle}>🏆 Certifications</h3>
        <p style={styles.cardValue}>{stats.certifications}</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>👀 Resume Views</h3>
          <p style={styles.cardValue}>120</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={styles.box}>
        <h2>⚡ Quick Actions</h2>

        <button style={{ ...styles.btn, background: "#4f46e5" }}>
          + Add Blog
        </button>

        <button style={{ ...styles.btn, background: "#16a34a" }}>
          + Add Project
        </button>

        <button style={{ ...styles.btn, background: "#f59e0b" }}>
          + Add Experience
        </button>

        <button style={{ ...styles.btn, background: "#06b6d4" }}>
          + Add Education
        </button>
      </div>

      <button style={{...styles.btn, background: "#8b5cf6",}}
>     + Add Certification
      </button>

      {/* Activity */}
      <div style={styles.box}>
        <h2>📌 Recent Activity</h2>
        <ul style={styles.ul}>
          <li>✔ System running smoothly</li>
          <li>✔ Data synced successfully</li>
          <li>✔ API connected</li>
        </ul>
      </div>

      {/* System */}
      <div style={styles.box}>
        <h2>🖥️ System Status</h2>

        <div style={styles.systemGrid}>
          <p>Server: <span style={styles.green}>Active</span></p>
          <p>Database: <span style={styles.green}>Connected</span></p>
          <p>API: <span style={styles.green}>Working</span></p>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  dashboard: {
    padding: "25px",
    background: "#111827",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "system-ui",
  },

  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    flexWrap: "wrap",
    gap: "15px",
  },

  logoutBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
  },

  card: {
    background: "linear-gradient(135deg, #1e293b, #334155)",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid #334155",
  },

  cardTitle: {
    color: "#94a3b8",
    fontSize: "14px",
  },

  cardValue: {
    fontSize: "32px",
    fontWeight: "bold",
    marginTop: "10px",
  },

  box: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "16px",
    marginTop: "20px",
  },

  btn: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },

  ul: {
    listStyle: "none",
    padding: 0,
    color: "#cbd5e1",
  },

  systemGrid: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    color: "#cbd5e1",
  },

  green: {
    color: "#22c55e",
    fontWeight: "bold",
  },
};