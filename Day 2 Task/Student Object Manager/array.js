// Student Object
let student = {
    rollNo: 101,
    name: "Shravan",
    marks: 85,
    address: "Nagpur"
};

// Display Student Details
function displayStudent() {

    let output = "";

    for(let key in student){
        output += "<b>" + key + ":</b> " + student[key] + "<br>";
    }

    document.getElementById("result").innerHTML = output;
}

// Update Marks
function updateMarks() {

    let marks = document.getElementById("newMarks").value;

    if(marks === ""){
        alert("Please enter marks");
        return;
    }

    student.marks = Number(marks);

    displayStudent();
}

// Add New Property
function addProperty() {

    let propertyName = document.getElementById("propertyName").value;
    let propertyValue = document.getElementById("propertyValue").value;

    if(propertyName === "" || propertyValue === ""){
        alert("Please enter property name and value");
        return;
    }

    student[propertyName] = propertyValue;

    displayStudent();
}

// Delete Property
function deleteProperty() {

    let property = document.getElementById("deleteProperty").value;

    if(property === ""){
        alert("Please enter property name");
        return;
    }

    delete student[property];

    displayStudent();
}