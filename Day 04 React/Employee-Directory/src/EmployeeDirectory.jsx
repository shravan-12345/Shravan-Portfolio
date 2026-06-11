function EmployeeDirectory() {

  const employees = [
    {
      id: 1,
      name: "John",
      department: "IT"
    },
    {
      id: 2,
      name: "Rahul",
      department: "HR"
    },
    {
      id: 3,
      name: "Priya",
      department: "Finance"
    }
  ];

  return (
    <div
      style={{
        width: "400px",
        margin: "30px auto",
        padding: "20px",
        border: "3px solid black",
        borderRadius: "15px",
        backgroundColor: "#fc1ecf"
      }}
    >
      <h2 style={{textAlign:"center", color:"Black"}}>
        Employee Directory
      </h2>

      {employees.map((employee) => (
        <div
          key={employee.id}
          style={{
            border: "1px solid black",
            padding: "15px",
            margin: "10px",
            borderRadius: "10px",
            backgroundColor: "#ffffff"
          }}
        >
          <h3> {employee.name}</h3>
          <p> ID: {employee.id}</p>
          <p> Department: {employee.department}</p>
        </div>
      ))}

    </div>
  );
}

export default EmployeeDirectory;