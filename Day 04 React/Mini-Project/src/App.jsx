import { useState } from "react";
import StudentCard from "./StudentCard";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul",
      course: "React",
      status: true,
      email: "rahul@gmail.com",
      department: "Computer Engineering",
      rollNo: "101",
      prn: "220101001",
    },
    {
      id: 2,
      name: "Amit",
      course: "Node.js",
      status: false,
      email: "amit@gmail.com",
      department: "Information Technology",
      rollNo: "102",
      prn: "220101002",
    },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    course: "",
    email: "",
    department: "",
    rollNo: "",
    prn: "",
  });

  const addStudent = () => {
    if (
      !newStudent.name ||
      !newStudent.course ||
      !newStudent.email
    ) {
      alert("Please fill all required fields");
      return;
    }

    const student = {
      id: Date.now(),
      ...newStudent,
      status: true,
    };

    setStudents([...students, student]);

    setNewStudent({
      name: "",
      course: "",
      email: "",
      department: "",
      rollNo: "",
      prn: "",
    });
  };

  const deleteStudent = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#69defc",
         border:"2px solid black",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2c3e50",
        }}
      >
        🎓 Student Management Dashboard
      </h1>

      {/* Add Student Form */}

      <div
        style={{
          width: "400px",
          margin: "20px auto",
          backgroundColor: "white",
          border:"1px solid black",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h2>➕ Add New Student</h2>

        <input
          type="text"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              name: e.target.value,
            })
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Course"
          value={newStudent.course}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              course: e.target.value,
            })
          }
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              email: e.target.value,
            })
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Department"
          value={newStudent.department}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              department: e.target.value,
            })
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Roll No"
          value={newStudent.rollNo}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              rollNo: e.target.value,
            })
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="PRN No"
          value={newStudent.prn}
          onChange={(e) =>
            setNewStudent({
              ...newStudent,
              prn: e.target.value,
            })
          }
        />

        <br /><br />

        <button
          onClick={addStudent}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add Student
        </button>
      </div>

      {/* Student Cards */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {students.map((student) => (
          <StudentCard
            key={student.id}
            {...student}
            deleteStudent={deleteStudent}
          />
        ))}
      </div>
    </div>
  );
}

export default App;