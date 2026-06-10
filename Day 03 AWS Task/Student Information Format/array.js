// Student Object
const student = {
    rollNo: 101,
    name: "Shravan",
    course: "B.Tech",
    marks: 85,
    city: "Kolhapur"
};

const { rollNo, name, course, marks, city } = student;

const studentInfo = `
    <h3>Student Details</h3>
    <p><b>Roll Number:</b> ${rollNo}</p>
    <p><b>Name:</b> ${name}</p>
    <p><b>Course:</b> ${course}</p>
    <p><b>Marks:</b> ${marks}</p>
    <p><b>City:</b> ${city}</p>
`;

document.getElementById("output").innerHTML = studentInfo;