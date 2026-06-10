function loadData() {
    document.getElementById("output").innerHTML = "Loading...";

    const myPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                id: 101,
                name: "Shravan",
                course: "MERN Stack"
            });

            // reject("Failed to Load Data");
        }, 3000);

    });

    myPromise
        .then((data) => {
            document.getElementById("output").innerHTML = `
                <h3>Data Loaded Successfully</h3>
                <p><b>ID:</b> ${data.id}</p>
                <p><b>Name:</b> ${data.name}</p>
                <p><b>Course:</b> ${data.course}</p>
            `;
        })
        .catch((error) => {
            document.getElementById("output").innerHTML = `<p>${error}</p>`;
        });
}