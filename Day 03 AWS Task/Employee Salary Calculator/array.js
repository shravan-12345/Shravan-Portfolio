let salaries = [];

const addSalary = () => {

    let salary = Number(document.getElementById("salary").value);

    if (salary <= 0 || isNaN(salary)) {
        alert("Please enter a valid salary");
        return;
    }

    salaries.push(salary);

    document.getElementById("salaryList").innerHTML =
        "Salaries: " + salaries.join(", ");

    document.getElementById("salary").value = "";
};

const calculateSalary = () => {

    if (salaries.length === 0) {
        alert("Please add salaries first");
        return;
    }

    const totalSalary = salaries.reduce(
        (total, salary) => total + salary,
        0
    );

    const averageSalary = totalSalary / salaries.length;

    document.getElementById("result").innerHTML = `
        <p><b>Total Employees:</b> ${salaries.length}</p>
        <p><b>Total Salary:</b> ₹${totalSalary}</p>
        <p><b>Average Salary:</b> ₹${averageSalary.toFixed(2)}</p>
    `;
};