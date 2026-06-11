import "./App.css";

function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <h2>Employee Details</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Department:</b> {props.department}</p>
      <p><b>Salary:</b> ₹{props.salary}</p>
    </div>
  );
}

function App() {
  return (
    <>
    <EmployeeCard
      name="John"
      department="IT"
      salary={50000}
    />

    <EmployeeCard
      name="shravan"
      department="IT"
      salary={40000}
    />
    </>

  );
}

export default App;