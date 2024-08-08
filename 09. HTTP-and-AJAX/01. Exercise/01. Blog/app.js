function attachEvents() {
    const baseURL = "http://localhost:3030/jsonstore/blog/";

    const loadPostsButton = document.getElementById("btnLoadPosts");
    const viewButton = document.getElementById("btnViewPost");
    const postsSelect = document.getElementById("posts");

    const postTitle = document.getElementById("post-title");
    const postBody = document.getElementById("post-body");
    const postCommments = document.getElementById("post-comments");

    let allPosts = {};

    loadPostsButton.addEventListener("click", async () => {

        postsSelect.innerHTML = "";

        const response = await fetch(baseURL + "posts");
        allPosts = await response.json();

        for (const [postId, postObject] of Object.entries(allPosts)) {
            const option = document.createElement("option");

            option.value = postId;
            option.textContent = postObject.title;
            postsSelect.appendChild(option);
        }
    });


    viewButton.addEventListener("click", async () => {
        postBody.innerHTML = "";
        postCommments.innerHTML = "";

        const postId = postsSelect.value;
        postBody.textContent = allPosts[postId].body;
        postTitle.textContent = allPosts[postId].title;

        const response = await fetch(baseURL + "comments");
        const commentsInfo = await response.json();

        const filteredComments = Object.values(commentsInfo).filter(e => e.postId === postId);
        filteredComments.forEach(comment => {
            const li = document.createElement("li");
            li.id = comment.id;
            li.textContent = comment.text;
            postCommments.appendChild(li);
        });
    });
}

attachEvents();