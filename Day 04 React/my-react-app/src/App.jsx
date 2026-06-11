function App() {
  // Student Object
  const student = {
    name: "Shravan",
    age: 24,
    course: "React JS",
    city: "Pune",
  };

  // Object Destructuring
  const { name, age, course, city } = student;

  // Template Literal
  const studentInfo = `My name is ${name}. I am ${age} years old. I am learning ${course} and I live in ${city}.`;

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        border: "2px solid black",
        padding: "20px",
        width: "500px",
        margin: "50px auto",
        borderRadius: "10px",
      }}
    >
      <h1>Student Information</h1>

      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Course: {course}</h3>
      <h3>City: {city}</h3>

      <hr />

      <p>{studentInfo}</p>
    </div>
  );
}

export default App;