import { useEffect, useState } from "react";
import api from "../../services/api";

function ExperienceAdmin() {
  const [experiences, setExperiences] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const token = localStorage.getItem("token");

  const fetchExperiences = async () => {
    try {
      const res = await api.get("/experience");
      setExperiences(res.data);
    } catch (error) {
      console.error(error);
    }
  };

 useEffect(() => {
  const loadData = async () => {
    try {
      const res = await api.get("/experience");
      setExperiences(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  loadData();
}, []);
  const resetForm = () => {
    setForm({
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    });

    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await api.put(`/experience/${editingId}`, form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert("Experience Updated Successfully");
      } else {
        await api.post("/experience", form, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert("Experience Added Successfully");
      }

      resetForm();
      fetchExperiences();
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  const handleEdit = (exp) => {
    setEditingId(exp._id);

    setForm({
      company: exp.company || "",
      role: exp.role || "",
      startDate: exp.startDate || "",
      endDate: exp.endDate || "",
      description: exp.description || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this experience?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/experience/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchExperiences();

      alert("Experience Deleted Successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        💼 Experience Management
      </h1>

      <div style={styles.formCard}>
        <h2
          style={{
            color: editingId
              ? "#22c55e"
              : "#60a5fa",
            marginBottom: "20px",
          }}
        >
          {editingId
            ? "✏️ Edit Experience"
            : "➕ Add Experience"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={(e) =>
              setForm({
                ...form,
                company: e.target.value,
              })
            }
            required
          />

          <input
            style={styles.input}
            type="text"
            placeholder="Role"
            value={form.role}
            onChange={(e) =>
              setForm({
                ...form,
                role: e.target.value,
              })
            }
            required
          />

          <input
            style={styles.input}
            type="text"
            placeholder="Start Date (Jan 2024)"
            value={form.startDate}
            onChange={(e) =>
              setForm({
                ...form,
                startDate: e.target.value,
              })
            }
          />

          <input
            style={styles.input}
            type="text"
            placeholder="End Date (Present)"
            value={form.endDate}
            onChange={(e) =>
              setForm({
                ...form,
                endDate: e.target.value,
              })
            }
          />

          <textarea
            style={styles.textarea}
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <div style={styles.buttonGroup}>
            <button
              type="submit"
              style={{
                ...styles.saveBtn,
                background: editingId
                  ? "#22c55e"
                  : "#4f46e5",
              }}
            >
              {editingId
                ? "Update Experience"
                : "Add Experience"}
            </button>

            {editingId && (
              <button
                type="button"
                style={styles.cancelBtn}
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div style={styles.grid}>
        {experiences.map((exp) => (
          <div
            key={exp._id}
            style={styles.card}
          >
            <h3>{exp.company}</h3>

            <p style={styles.role}>
              {exp.role}
            </p>

            <p style={styles.date}>
              📅 {exp.startDate} - {exp.endDate}
            </p>

            <p style={styles.description}>
              {exp.description}
            </p>

            <div style={styles.actionButtons}>
              <button
                style={styles.editBtn}
                onClick={() =>
                  handleEdit(exp)
                }
              >
                Edit
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() =>
                  handleDelete(exp._id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceAdmin;

const styles = {
  container: {
    padding: "30px",
    background: "#0f172a",
    minHeight: "100vh",
    color: "#fff",
  },

  heading: {
    marginBottom: "25px",
    fontSize: "32px",
  },

  formCard: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "16px",
    marginBottom: "30px",
    border: "1px solid #334155",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "#fff",
  },

  textarea: {
    width: "100%",
    minHeight: "120px",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "#fff",
  },

  buttonGroup: {
    display: "flex",
    gap: "10px",
  },

  saveBtn: {
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },

  cancelBtn: {
    background: "#64748b",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(320px,1fr))",
    gap: "20px",
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid #334155",
  },

  role: {
    color: "#818cf8",
    marginTop: "8px",
  },

  date: {
    color: "#94a3b8",
    marginTop: "8px",
  },

  description: {
    marginTop: "12px",
    lineHeight: "1.6",
  },

  actionButtons: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },

  editBtn: {
    background: "#f59e0b",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};