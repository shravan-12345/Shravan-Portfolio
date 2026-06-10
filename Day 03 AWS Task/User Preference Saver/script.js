const usernameInput = document.getElementById("username");
const result = document.getElementById("result");

window.onload = () => {
    let savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        result.innerHTML = `
            <h3>Saved User Details</h3>
            <p><strong>Username:</strong> ${savedUsername}</p>
        `;
    }
};

const saveUsername = () => {

    let username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter a username!");
        return;
    }


    localStorage.setItem("username", username);

    result.innerHTML = `
        <h3>Saved User Details</h3>
        <p><strong>Username:</strong> ${username}</p>
    `;

    usernameInput.value = "";
};