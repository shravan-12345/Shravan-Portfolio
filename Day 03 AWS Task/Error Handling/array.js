function fetchData() {
    const loading = document.getElementById("loading");
    const message = document.getElementById("message");

    loading.innerText = "Loading...";
    message.innerText = "";

    fetch("https://jsonplaceholder.typicode.com/invalid-url")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data!");
            }
            return response.json();
        })
        .then(data => {
            loading.innerText = "";
            message.innerText = "Data fetched successfully!";
        })
        .catch(error => {
            loading.innerText = "";
            message.innerText = "Error: " + error.message;
            message.style.color = "red";
        });
}