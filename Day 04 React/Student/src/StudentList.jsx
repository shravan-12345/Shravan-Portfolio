function StudentList() {

  const students = ["Rahul", "Amit", "Priya", "Sneha"];

  return (
    <div style={{
      backgroundColor: "#f0f8ff",
      border: "3px solid #0077b6",
      padding: "20px",
      width: "300px",
      margin: "50px auto",
      borderRadius: "15px",
      boxShadow: "0px 5px 15px gray",
      textAlign: "center"
    }}>

      <h2 style={{
        color: "#023e8a"
      }}>
        🎓 Student List
      </h2>

      <ul style={{
        listStyle: "none",
        padding: 0
      }}>
        {students.map((student, index) => (
          <li key={index}
            style={{
              backgroundColor: "#90e0ef",
              color: "#03045e",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold"
            }}
          >
            {student}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default StudentList;