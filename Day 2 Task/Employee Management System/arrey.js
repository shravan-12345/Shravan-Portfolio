let employees = [];

function addEmployee() {

    let id = document.getElementById("empId").value;
    let name = document.getElementById("empName").value;
    let department = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;

    if (id === "" || name === "" || department === "" || salary === "") {
        document.getElementById("message").innerHTML =
            "Please fill all employee details.";
        return;
    }

    employees.push({
        id: Number(id),
        name: name,
        department: department,
        salary: Number(salary)
    });

    document.getElementById("message").innerHTML =
        "Employee added successfully.";

    displayEmployees();

    document.getElementById("empId").value = "";
    document.getElementById("empName").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";
}

function removeEmployee() {

    let id = Number(document.getElementById("empId").value);

    let index = employees.findIndex(emp => emp.id === id);

    if (index !== -1) {
        employees.splice(index, 1);
        document.getElementById("message").innerHTML =
            "Employee removed successfully.";
    } else {
        document.getElementById("message").innerHTML =
            "Employee ID not found.";
    }

    displayEmployees();
}

function searchEmployee() {

    let searchId = Number(document.getElementById("searchId").value);

    let employee = employees.find(emp => emp.id === searchId);

    if (employee) {
        document.getElementById("message").innerHTML =
            "Employee Found → ID: " + employee.id +
            ", Name: " + employee.name +
            ", Department: " + employee.department +
            ", Salary: " + employee.salary;
    } else {
        document.getElementById("message").innerHTML =
            "Employee not found.";
    }
}

function displayEmployees() {

    let tableBody = document.querySelector("#employeeTable tbody");

    tableBody.innerHTML = "";

    employees.forEach(function(emp) {

        let row = `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}