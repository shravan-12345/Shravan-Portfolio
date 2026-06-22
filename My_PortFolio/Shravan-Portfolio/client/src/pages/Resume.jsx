import { useState } from "react";

function Resume() {
  const [loading, setLoading] = useState(false);

  const resumeUrl = "http://localhost:5000/uploads/resumes/resume.pdf";
  const downloadUrl = "http://localhost:5000/api/resume/download";

  // VIEW RESUME
  const handleView = () => {
    window.open(resumeUrl, "_blank");
  };

  // DOWNLOAD RESUME
  const handleDownload = () => {
    try {
      setLoading(true);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "resume.pdf");

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => setLoading(false), 1000);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📄 Resume</h1>

      <div style={styles.card}>
        <div style={styles.icon}>💼</div>

        <h2 style={styles.heading}>Professional Resume</h2>

        <p style={styles.text}>
          You can view my resume online or download it for offline access.
        </p>

        {/* BUTTONS */}
        <div style={styles.btnGroup}>
          <button style={styles.viewBtn} onClick={handleView}>
            👁 View Resume
          </button>

          <button
            style={styles.downloadBtn}
            onClick={handleDownload}
            disabled={loading}
          >
            {loading ? "Downloading..." : "⬇ Download"}
          </button>
        </div>

        <p style={styles.note}>Updated version available</p>
      </div>
    </div>
  );
}

export default Resume;

/* ================= STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(99,102,241,0.15), transparent 50%), #0a0a0a",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "25px",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(99,102,241,0.35)",
    borderRadius: "16px",
    padding: "30px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
  },

  icon: {
    fontSize: "45px",
    marginBottom: "10px",
  },

  heading: {
    fontSize: "22px",
    marginBottom: "10px",
  },

  text: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.7)",
    marginBottom: "20px",
    lineHeight: "1.6",
  },

  btnGroup: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "10px",
  },

  viewBtn: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #6366f1",
    background: "transparent",
    color: "#6366f1",
    cursor: "pointer",
    fontWeight: "600",
  },

  downloadBtn: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    background: "#6366f1",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
  },

  note: {
    marginTop: "12px",
    fontSize: "12px",
    color: "rgba(255,255,255,0.5)",
  },
};