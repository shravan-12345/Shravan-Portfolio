function fetchData(callback) {
    document.getElementById("output").innerHTML = "Fetching data...";

    setTimeout(() => {
        let data = "Data fetched successfully!";
        callback(data);
    }, 3000);
}

function displayData(data) {
    document.getElementById("output").innerHTML = data;
}

function startProcess() {
    fetchData(displayData);
}