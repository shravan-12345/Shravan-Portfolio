import "./App.css";

function Student(props) {
  return (
    <div className="student-card">
      <h2>Student Details</h2>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Age:</b> {props.age}</p>
      <p><b>Course:</b> {props.course}</p>
    </div>
  );
}

function App() {
  return (
    <Student
      name="Shravan"
      age={24}
      course="MERN Stack"
    />
  );
}

export default App;