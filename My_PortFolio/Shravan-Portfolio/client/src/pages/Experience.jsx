import { useEffect, useState } from "react";
import api from "../services/api";

function Experience() {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExperience = async () => {
      try {
        setLoading(true);

        const res = await api.get("/experience");

        // safe handling (API mismatch avoid crash)
        setExperience(Array.isArray(res?.data) ? res.data : []);
      } catch (error) {
        console.log("Error fetching experience:", error);
        setExperience([]);
      } finally {
        setLoading(false);
      }
    };

    loadExperience();
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>💼 Experience</h1>

      <p style={styles.subtitle}>
        My professional journey & work experience
      </p>

      {/* LOADING */}
      {loading && <p style={styles.msg}>Loading experience...</p>}

      {/* EMPTY */}
      {!loading && experience.length === 0 && (
        <p style={styles.msg}>No experience found 😕</p>
      )}

      {/* TIMELINE */}
      <div style={styles.timeline}>
        {experience.map((exp) => (
          <div key={exp._id} style={styles.card}>
            
            <div style={styles.leftBar}></div>

            <div style={styles.content}>
              <h2 style={styles.company}>
                {exp.company || "Company Name"}
              </h2>

              <h3 style={styles.position}>
                {exp.position || "Position"}
              </h3>

              <p style={styles.duration}>
                📅 {exp.duration || "Duration not available"}
              </p>

              <p style={styles.desc}>
                {exp.description || "No description provided"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

/* ================= STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(99,102,241,0.15), transparent 50%), #0a0a0a",
    color: "#fff",
    padding: "60px 20px",
    textAlign: "center",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "40px",
  },

  msg: {
    color: "#94a3b8",
    fontSize: "16px",
  },

  timeline: {
    maxWidth: "850px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  card: {
    display: "flex",
    gap: "15px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(99, 102, 241, 0.25)",
    borderRadius: "14px",
    padding: "20px",
    textAlign: "left",
    backdropFilter: "blur(10px)",
    transition: "0.3s ease",
  },

  leftBar: {
    width: "4px",
    borderRadius: "10px",
    background: "#6366f1",
    boxShadow: "0 0 10px rgba(99,102,241,0.5)",
  },

  content: {
    flex: 1,
  },

  company: {
    fontSize: "22px",
    color: "#e2e8f0",
    marginBottom: "4px",
  },

  position: {
    fontSize: "16px",
    color: "#a5b4fc",
    marginBottom: "8px",
  },

  duration: {
    fontSize: "13px",
    color: "#94a3b8",
    marginBottom: "10px",
  },

  desc: {
    fontSize: "14px",
    color: "#cbd5e1",
    lineHeight: "1.6",
  },
};