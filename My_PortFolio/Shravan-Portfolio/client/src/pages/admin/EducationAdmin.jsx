import { useEffect, useState } from "react";
import api from "../../services/api";

function EducationAdmin() {
  const [education, setEducation] = useState([]);

  const [degree, setDegree] = useState("");
  const [branch, setBranch] = useState("");
  const [college, setCollege] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchEducation = async () => {
    try {
      const res = await api.get("/education");

      if (Array.isArray(res.data)) {
        setEducation(res.data);
      } else if (Array.isArray(res.data.education)) {
        setEducation(res.data.education);
      } else if (Array.isArray(res.data.data)) {
        setEducation(res.data.data);
      } else {
        setEducation([]);
      }
    } catch (error) {
      console.log("Fetch Error:", error);
      setEducation([]);
    }
  };

  useEffect(() => {
    const loadEducation = async () => {
      await fetchEducation();
    };

    loadEducation();
  }, []);

  const clearForm = () => {
    setDegree("");
    setBranch("");
    setCollege("");
    setCgpa("");
    setStartYear("");
    setEndYear("");
    setEditId(null);
  };

  const addEducation = async () => {
    try {
      await api.post(
        "/education",
        {
          degree,
          branch,
          college,
          cgpa,
          startYear,
          endYear,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      clearForm();
      fetchEducation();

      alert("Education Added Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed To Add Education");
    }
  };

  const updateEducation = async () => {
    try {
      await api.put(
        `/education/${editId}`,
        {
          degree,
          branch,
          college,
          cgpa,
          startYear,
          endYear,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      clearForm();
      fetchEducation();

      alert("Education Updated Successfully");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  const deleteEducation = async (id) => {
    try {
      await api.delete(`/education/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchEducation();

      alert("Education Deleted Successfully");
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div
      style={{
        color: "#fff",
        padding: "20px",
      }}
    >
      <h1>🎓 Education Admin</h1>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="College"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="CGPA"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Start Year"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="End Year"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
          style={styles.input}
        />

        {editId ? (
          <button style={styles.updateBtn} onClick={updateEducation}>
            Update Education
          </button>
        ) : (
          <button style={styles.addBtn} onClick={addEducation}>
            Add Education
          </button>
        )}
      </div>

      <div>
        {education.length === 0 ? (
          <p>No Education Records Found</p>
        ) : (
          education.map((edu) => (
            <div key={edu._id} style={styles.card}>
              <h3>{edu.degree}</h3>

              <p>
                <strong>Branch:</strong> {edu.branch}
              </p>

              <p>
                <strong>College:</strong> {edu.college}
              </p>

              <p>
                <strong>CGPA:</strong> {edu.cgpa}
              </p>

              <p>
                <strong>Duration:</strong> {edu.startYear} - {edu.endYear}
              </p>

              <button
                style={styles.editBtn}
                onClick={() => {
                  setEditId(edu._id);
                  setDegree(edu.degree);
                  setBranch(edu.branch);
                  setCollege(edu.college);
                  setCgpa(edu.cgpa);
                  setStartYear(edu.startYear);
                  setEndYear(edu.endYear);
                }}
              >
                Edit
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() => deleteEducation(edu._id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #334155",
    boxSizing: "border-box",
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "15px",
  },

  addBtn: {
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  updateBtn: {
    background: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  editBtn: {
    background: "#f59e0b",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px",
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

export default EducationAdmin;