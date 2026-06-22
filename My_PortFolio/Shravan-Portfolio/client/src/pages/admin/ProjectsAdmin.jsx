import { useEffect, useState } from "react";
import api from "../../services/api";

function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");

  const token = localStorage.getItem("token");

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const res = await api.get("/projects");

      console.log("Projects API Response:", res.data);

      if (Array.isArray(res.data)) {
        setProjects(res.data);
      } else if (Array.isArray(res.data.projects)) {
        setProjects(res.data.projects);
      } else if (Array.isArray(res.data.data)) {
        setProjects(res.data.data);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.log("Fetch Error:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);

        const res = await api.get("/projects");

        if (Array.isArray(res.data)) {
          setProjects(res.data);
        } else if (Array.isArray(res.data.projects)) {
          setProjects(res.data.projects);
        } else if (Array.isArray(res.data.data)) {
          setProjects(res.data.data);
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.log(error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

 const resetForm = () => {
  setTitle("");
  setDescription("");
  setImage("");
  setGithubLink("");
  setLinkedinLink("");
  setEditId(null);
};

  // Add Project
  const addProject = async () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.post(
        "/projects",
       {
  title,
  description,
  image,
  githubLink,
  linkedinLink,
},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      resetForm();
      fetchProjects();

      alert("✅ Project Added Successfully");
    } catch (error) {
      console.log(error);
      alert("❌ Failed to Add Project");
    }
  };

  // Update Project
  const updateProject = async () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.put(
        `/projects/${editId}`,
       {
  title,
  description,
  image,
  githubLink,
  linkedinLink,
},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      resetForm();
      fetchProjects();

      alert("✅ Project Updated Successfully");
    } catch (error) {
      console.log(error);
      alert("❌ Update Failed");
    }
  };

  // Delete Project
  const deleteProject = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/projects/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchProjects();

      alert("🗑️ Project Deleted");
    } catch (error) {
      console.log(error);
      alert("❌ Delete Failed");
    }
  };

  return (
    <div
      style={{
        color: "#fff",
        padding: "20px",
      }}
    >
      <h1>🚀 Projects Admin</h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "20px",
        }}
      >
        Total Projects: {projects.length}
      </p>

      {/* Form */}
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>
          {editId ? "✏️ Update Project" : "➕ Add New Project"}
        </h3>

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            minHeight: "100px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <input
         type="text"
         placeholder="Project Image URL"
         value={image}
        onChange={(e) => setImage(e.target.value)}
        style={{
          width: "100%",
           padding: "12px",
          marginBottom: "10px",
          borderRadius: "8px",
          border: "none",
           }}
          />

<input
  type="text"
  placeholder="GitHub Link"
  value={githubLink}
  onChange={(e) => setGithubLink(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "none",
  }}
/>

      <input
       type="text"
     placeholder="LinkedIn Link"
value={linkedinLink}
onChange={(e) => setLinkedinLink(e.target.value)}
       style={{
       width: "100%",
       padding: "12px",
       marginBottom: "10px",
       borderRadius: "8px",
      border: "none",
      }}
        />

        {editId ? (
          <>
          <button
  onClick={updateProject}
  style={{
    background: "linear-gradient(135deg, #16a34a, #22c55e)",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "10px",
    cursor: "pointer",
    marginRight: "10px",
    fontWeight: "600",
    fontSize: "15px",
    boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-2px)";
    e.target.style.boxShadow =
      "0 8px 20px rgba(34, 197, 94, 0.4)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow =
      "0 4px 12px rgba(34, 197, 94, 0.3)";
  }}
>
  ✏️ Update Project
</button>

            <button
              onClick={resetForm}
              style={{
                background: "#64748b",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={addProject}
            style={{
              background: "#4f46e5",
              color: "#fff",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Add Project
          </button>
        )}
      </div>

      {/* Project List */}
      {loading ? (
        <p>Loading Projects...</p>
      ) : (
        <div>
          {projects.length === 0 ? (
            <p>No Projects Found</p>
          ) : (
            projects.map((project) => (
              <div
                key={project._id}
                style={{
                  background: "#1e293b",
                  padding: "20px",
                  borderRadius: "12px",
                  marginBottom: "15px",
                  border: "1px solid #334155",
                }}
              >
                <h3>{project.title}</h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    marginTop: "10px",
                  }}
                >
                  {project.description}
                </p>

{project.image && (
  <img
    src={project.image}
    alt={project.title}
    style={{
      width: "100%",
      maxHeight: "250px",
      objectFit: "cover",
      borderRadius: "10px",
      marginTop: "15px",
    }}
  />
)}

<div
  style={{
    marginTop: "15px",
    display: "flex",
    gap: "10px",
  }}
>
  {project.githubLink && (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noreferrer"
      style={{
        background: "#2563eb",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "8px",
        textDecoration: "none",
      }}
    >
      GitHub
    </a>
  )}

  {project.linkedinLink && (
    <a
      href={project.linkedinLink}
      target="_blank"
      rel="noreferrer"
      style={{
        background: "#0A66C2",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "8px",
        textDecoration: "none",
      }}
    >
      LinkedIn
    </a>
  )}
</div>

     <div
      style={{
      marginTop: "15px",
            }}
      >
<button
  onClick={() => {
    setEditId(project._id);
    setTitle(project.title || "");
    setDescription(project.description || "");
    setLinkedinLink(project.linkedinLink || "");
    setImage(project.image || "");
    setGithubLink(project.githubLink || "");
  }}
  style={{
    background:
      editId === project._id
        ? "linear-gradient(135deg, #16a34a, #22c55e)"
        : "linear-gradient(135deg, #f59e0b, #fbbf24)",

    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    cursor: "pointer",
    marginRight: "10px",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
  }}
>
  {editId === project._id ? "✅ Editing" : "✏️ Edit"}
</button>

 <button
  onClick={() => deleteProject(project._id)}
  style={{
    background: "linear-gradient(135deg, #ef4444, #f87171)",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    boxShadow: "0 4px 12px rgba(239, 68, 68, 0.35)",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-2px)";
    e.target.style.boxShadow =
      "0 8px 20px rgba(239, 68, 68, 0.45)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow =
      "0 4px 12px rgba(239, 68, 68, 0.35)";
  }}
>
  🗑️ Delete
</button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectsAdmin;