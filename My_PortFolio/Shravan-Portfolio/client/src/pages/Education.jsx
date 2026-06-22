import { useEffect, useState } from "react";
import api from "../services/api";

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const loadEducation = async () => {
      try {
        const res = await api.get("/education");

        if (Array.isArray(res.data)) {
          setEducation(res.data);
        } else {
          setEducation([]);
        }
      } catch (error) {
        console.log("Education Fetch Error:", error);
      }
    };

    loadEducation();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, rgba(99,102,241,0.15), transparent 50%), #0a0a0a",
        color: "#fff",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "40px",
        }}
      >
        🎓 Education
      </h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {education.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>
            No Education Records Found
          </h3>
        ) : (
          education.map((edu) => (
            <div
              key={edu._id}
              style={{
                background: "rgba(255,255,255,0.05)",
                 border: "1px solid rgba(99, 102, 241, 0.35)",
                padding: "25px",
                borderRadius: "15px",
                marginBottom: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              <h2
                style={{
                  color: "#60a5fa",
                  marginBottom: "10px",
                }}
              >
                {edu.degree}
              </h2>

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
                <strong>Duration:</strong>{" "}
                {edu.startYear} - {edu.endYear}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Education;