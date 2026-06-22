import { useEffect, useState } from "react";
import api from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadProjects = async () => {
    try {
      const res = await api.get("/projects");

      // FIX
      const projectsData = Array.isArray(res.data)
        ? res.data
        : res.data.projects || [];

      setProjects(projectsData);
    } catch (error) {
      console.log("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  loadProjects();
}, []);
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🚀 My Projects</h1>
      <p style={styles.subtitle}>
        Some of the work I built using MERN, DevOps & Cloud
      </p>

      {/* LOADING */}
      {loading && <p style={styles.msg}>Loading projects...</p>}

      {/* EMPTY */}
      {!loading && projects.length === 0 && (
        <p style={styles.msg}>No Projects Found 😕</p>
      )}

      {/* GRID */}
      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project._id} style={styles.card}>

          {project.image && (
           <img
           src={project.image}
           alt={project.title}
           style={styles.projectImage}
          />
          )}
            
            <h2 style={styles.projectTitle}>
              {project.title}
            </h2>

            <p style={styles.desc}>
              {project.description}
            </p>

            {/* TECH STACK */}
            {project.techStack && (
              <div style={styles.techWrap}>
                {project.techStack.split(",").map((tech, i) => (
                  <span key={i} style={styles.badge}>
                    {tech.trim()}
                  </span>
                ))}
              </div>
            )}

            {/* LINKS */}
            <div style={styles.links}>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...styles.btn, background: "#1f2937" }}
                >
                  GitHub
                </a>
              )}

           {project.linkedinLink && (
  <a
    href={project.linkedinLink}
    target="_blank"
    rel="noreferrer"
    style={{ ...styles.btn, background: "#0A66C2" }}
  >
    LinkedIn
  </a>
)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

/* ================= STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(99,102,241,0.15), transparent 50%), #0a0a0a",
    color: "white",
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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    margin: "auto",
  },

  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "20px",
    textAlign: "left",
    transition: "0.3s ease",
    backdropFilter: "blur(12px)",
    cursor: "pointer",
  },

  projectImage: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "12px",
        marginBottom: "15px",
       },

  projectTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#e2e8f0",
  },

  desc: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "12px",
    lineHeight: "1.5",
  },

  techWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "14px",
  },

  badge: {
    fontSize: "11px",
    padding: "4px 8px",
    borderRadius: "999px",
    background: "rgba(99,102,241,0.2)",
    color: "#a5b4fc",
    border: "1px solid rgba(99,102,241,0.3)",
  },

  links: {
    display: "flex",
    gap: "10px",
  },

  btn: {
    padding: "7px 12px",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "500",
    transition: "0.3s",
  },
};