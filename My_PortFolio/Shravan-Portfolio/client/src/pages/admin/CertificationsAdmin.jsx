import { useEffect, useState } from "react";
import api from "../../services/api";

function CertificationsAdmin() {
  const [certifications, setCertifications] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchCertifications = async () => {
    try {
      const res = await api.get("/certifications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCertifications(res.data);
    } catch (error) {
      console.error("Error fetching certifications:", error);
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  let ignore = false;

  const loadCertifications = async () => {
    try {
      setLoading(true);

      const res = await api.get("/certifications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!ignore) {
        setCertifications(res.data);
      }
    } catch (error) {
      console.error("Error fetching certifications:", error);
    } finally {
      if (!ignore) {
        setLoading(false);
      }
    }
  };

  loadCertifications();

  return () => {
    ignore = true;
  };
}, [token]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this certification?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/certifications/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchCertifications();

      alert("✅ Certification Deleted Successfully");
    } catch (error) {
      console.error(error);
      alert("❌ Delete Failed");
    }
  };

  const handleEdit = async (cert) => {
  const title = prompt(
    "Enter Certification Title",
    cert.title
  );

  if (!title) return;

  const issuer = prompt(
    "Enter Issuer Name",
    cert.issuer
  );

  if (!issuer) return;

  try {
    await api.put(
      `/certifications/${cert._id}`,
      {
        ...cert,
        title,
        issuer,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchCertifications();

    alert("✅ Certification Updated");
  } catch (error) {
    console.error(error);
    alert("❌ Update Failed");
  }
};

  const filteredCertifications = certifications.filter(
    (cert) =>
      cert.title?.toLowerCase().includes(search.toLowerCase()) ||
      cert.issuer?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.topBar}>
        <div>
          <h1 style={styles.heading}>
            🏆 Certification Management
          </h1>

          <p style={styles.subtitle}>
            Manage all certifications and credentials.
          </p>
        </div>

        <div style={styles.countCard}>
          Total Certifications: {certifications.length}
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search certifications..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* Loading */}
      {loading ? (
        <p style={styles.loading}>
          Loading Certifications...
        </p>
      ) : (
        <div style={styles.grid}>
          {filteredCertifications.length === 0 ? (
            <div style={styles.emptyState}>
              No Certifications Found
            </div>
          ) : (
            filteredCertifications.map((cert) => (
              <div
                key={cert._id}
                style={styles.card}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={styles.image}
                  onClick={() =>
                    window.open(cert.image, "_blank")
                  }
                />

                <div style={styles.content}>
                  <h3 style={styles.title}>
                    {cert.title}
                  </h3>

                  <p style={styles.issuer}>
                    🏢 {cert.issuer}
                  </p>

                  <p style={styles.date}>
                    📅 {cert.issueDate}
                  </p>

                  <div style={styles.actions}>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.verifyBtn}
                      >
                        Verify
                      </a>
                    )}

<button
  style={styles.editBtn}
  onClick={() => handleEdit(cert)}
>
  ✏️ Edit
</button>

                    <button
                      style={styles.deleteBtn}
                      onClick={() =>
                        handleDelete(cert._id)
                      }
                    >
                      Delete
                    </button>

                    <button
  onClick={async () => {
    const res = await api.post(
      "/certifications",
      {
        title: "Test Certificate",
        issuer: "Shravan",
        issueDate: "2025-08-01",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res.data);
  }}
>
  Test Add
</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default CertificationsAdmin;

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "#fff",
    padding: "30px",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px",
    flexWrap: "wrap",
    gap: "15px",
  },

  heading: {
    margin: 0,
    fontSize: "32px",
  },

  subtitle: {
    color: "#94a3b8",
    marginTop: "6px",
  },

  countCard: {
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: "12px",
    padding: "15px 20px",
    fontWeight: "600",
  },

  search: {
    width: "100%",
    padding: "14px",
    marginBottom: "30px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#1e293b",
    color: "#fff",
    fontSize: "15px",
  },

  loading: {
    textAlign: "center",
    color: "#94a3b8",
  },

  emptyState: {
    textAlign: "center",
    padding: "40px",
    background: "#1e293b",
    borderRadius: "15px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(350px,1fr))",
    gap: "20px",
  },

  card: {
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: "16px",
    overflow: "hidden",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    cursor: "pointer",
  },

  content: {
    padding: "20px",
  },

  title: {
    marginBottom: "10px",
  },

  issuer: {
    color: "#60a5fa",
    marginBottom: "10px",
  },

  date: {
    color: "#94a3b8",
    marginBottom: "20px",
  },

  actions: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  verifyBtn: {
    background: "#22c55e",
    color: "#fff",
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    fontWeight: "600",
  },

  editBtn: {
    background: "#f59e0b",
    color: "#fff",
    border: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },

  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};