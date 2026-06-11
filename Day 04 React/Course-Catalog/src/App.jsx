import { useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  const courses = [
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript"
  ];

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f4e840",
      border:"1px solid black",
      padding: "40px"
    }}>

      <h1 style={{ textAlign: "center" }}>
        Course Catalog
      </h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
      }}>

        {courses.map((course, index) => (

          <div 
            key={index}
            style={{
              width: "220px",
              padding: "25px",
              backgroundColor: "white",
              border: "1px solid #080808",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0px 5px 15px rgba(0,0,0,0.2)"
            }}
          >

            <h2>{course}</h2>

            <p>
              Learn {course} with projects
            </p>

            <button
              onClick={() => setMessage(`${course} Course Selected ✅`)}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Enroll Now
            </button>

          </div>

        ))}

      </div>

      {message && (
        <div style={{
          marginTop: "30px",
          textAlign: "center",
          backgroundColor: "white",
          padding: "15px",
          width: "300px",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "10px",
          border: "1px solid black",
          fontSize: "18px"
        }}>
          {message}
        </div>
      )}

    </div>
  );
}

export default App;