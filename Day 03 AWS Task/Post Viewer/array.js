function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById("posts");
            postsContainer.innerHTML = "";

            posts.slice(0, 10).forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.classList.add("post");

                postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;

                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
        });
}