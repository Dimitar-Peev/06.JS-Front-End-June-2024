window.addEventListener("load", solve);

function solve() {
    const titleInput = document.getElementById("post-title");
    const categoryInput = document.getElementById("post-category");
    const contentInput = document.getElementById("post-content");

    const reviewList = document.getElementById("review-list");
    const publishList = document.getElementById("published-list");

    const publishBtn = document.getElementById("publish-btn");
    publishBtn.addEventListener("click", publishHandler);

    const clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", clearPostsHandler);

    function publishHandler(e) {
        const title = titleInput.value;
        const category = categoryInput.value;
        const content = contentInput.value;

        if (title === "" || category === "" || content === "") {
            return;
        }

        const newPost = createPost(title, category, content);
        reviewList.appendChild(newPost);

        titleInput.value = "";
        categoryInput.value = "";
        contentInput.value = "";
    }

    function createPost(title, category, content) {
        const li = document.createElement("li");
        li.classList.add("rpost");

        const article = document.createElement("article");

        const h4Title = document.createElement("h4");
        h4Title.textContent = title;

        const pCategory = document.createElement("p");
        pCategory.textContent = `Category: ${category}`;

        const pContent = document.createElement("p");
        pContent.textContent = `Content: ${content}`;

        article.appendChild(h4Title);
        article.appendChild(pCategory);
        article.appendChild(pContent);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("action-btn", "edit");
        editBtn.addEventListener("click", editHandler);

        const approveBtn = document.createElement("button");
        approveBtn.textContent = "Approve";
        approveBtn.classList.add("action-btn", "approve");
        approveBtn.addEventListener("click", approveHandler);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(approveBtn);

        return li;
    }

    function editHandler(e) {
        const li = e.target.parentElement;
        li.remove();

        const h4Title = li.querySelector("h4");
        const titleValue = h4Title.textContent;

        const paragraphs = li.querySelectorAll("p");
        const categoryValue = paragraphs[0].textContent;
        const contentValue = paragraphs[1].textContent;

        titleInput.value = titleValue;
        categoryInput.value = categoryValue.substring(10);
        contentInput.value = contentValue.substring(9);
    }

    function approveHandler(e) {
        const li = e.target.parentElement;
        li.remove();

        const buttons = Array.from(li.querySelectorAll("button"));
        buttons.forEach(b => b.remove());

        publishList.appendChild(li);
    }

    function clearPostsHandler() {
        const postsToClear = Array.from(publishList.children);
        postsToClear.forEach(p => p.remove());
    }

}
