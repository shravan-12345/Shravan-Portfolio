const userData = document.getElementById("userData");

const fetchUsers = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        let output = "";

        users.forEach(user => {
            output += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                </tr>
            `;
        });

        userData.innerHTML = output;

    } catch (error) {
        userData.innerHTML = `
            <tr>
                <td colspan="3">Error Loading Data</td>
            </tr>
        `;
        console.log(error);
    }
};