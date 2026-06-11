import { useState } from "react";

function StudentCard({
  id,
  name,
  course,
  status,
  email,
  department,
  rollNo,
  prn,
  deleteStudent,
}) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        margin: "15px",
         border:"1px solid black",
        borderRadius: "15px",
        backgroundColor: "white",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      }}
    >
      <h2>👨‍🎓 {name}</h2>

      <p>
        <b>📚 Course:</b> {course}
      </p>

      <p
        style={{
          color: status ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {status ? "🟢 Active Student" : "🔴 Inactive Student"}
      </p>

      <button
        onClick={() => setShowProfile(!showProfile)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {showProfile ? "Hide Profile" : "View Profile"}
      </button>

      {showProfile && (
        <div
          style={{
            backgroundColor: "#f4f6f7",
            padding: "10px",
             border:"1px solid black",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Department:</b> {department}</p>
          <p><b>Roll No:</b> {rollNo}</p>
          <p><b>PRN No:</b> {prn}</p>
        </div>
      )}

      <button
        onClick={() => deleteStudent(id)}
        style={{
          padding: "10px",
          width: "100%",
          backgroundColor: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        🗑 Delete Student
      </button>
    </div>
  );
}

export default StudentCard;