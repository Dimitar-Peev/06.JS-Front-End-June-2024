window.addEventListener("load", solve);

function solve() {
    const storeState = {
        titleInput: null,
        categoryInput: null,
        contentInput: null,
    }

    const inputDOMSelectors = {
        titleInput: document.getElementById("task-title"),
        categoryInput: document.getElementById("task-category"),
        contentInput: document.getElementById("task-content"),
    }

    const otherDOMSelectors = {
        publishButton: document.getElementById("publish-btn"),
        editButton: document.querySelector(".action-btn .edit"),
        postButton: document.querySelector(".done-btn"),

        reviewList: document.getElementById("review-list"),
        publishedList: document.getElementById("published-list"),

        formElement: document.querySelector(".newPostContent"),
    }

    otherDOMSelectors.publishButton.addEventListener("click", addTaskForReview);

    function addTaskForReview(e) {
        e.preventDefault();
        const allFieldsHaveValue = Object.values(inputDOMSelectors).every((input) => input.value !== "");

        if (!allFieldsHaveValue) {
            console.log("EMPTY FIELD");
            return;
        }

        const {titleInput, categoryInput, contentInput} = inputDOMSelectors;
        const li = createElement("li", otherDOMSelectors.reviewList, null, ["rpost"]);
        const article = createElement("article", li);
        createElement("h4", article, titleInput.value);
        createElement("p", article, `Category: ${categoryInput.value}`);
        createElement("p", article, `Content: ${contentInput.value}`);
        const editButton = createElement("button", li, "Edit", ["action-btn", "edit"]);
        const postButton = createElement("button", li, "Post", ["action-btn", "post"]);

        for (const key in inputDOMSelectors) {
            storeState[key] = inputDOMSelectors[key].value;
        }

        clearAllInputs();


        editButton.addEventListener("click", edit);

        function edit() {
            for (const key in inputDOMSelectors) {
                inputDOMSelectors[key].value = storeState[key];
            }

            otherDOMSelectors.reviewList.removeChild(li);
        }


        postButton.addEventListener("click", save);

        function save() {
            otherDOMSelectors.reviewList.removeChild(li);
            otherDOMSelectors.publishedList.appendChild(li);

            li.removeChild(editButton);
            li.removeChild(postButton);
        }
    }

    function clearAllInputs() {
        Object.values(inputDOMSelectors)
            .forEach((input) => {
                input.value = "";
            });
    }

    function createElement(type, parentNode, content, classes, id, attributes, useInnerHTML) {
        const htmlElement = document.createElement(type);

        if (content && useInnerHTML) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== "input") {
                htmlElement.textContent = content;
            }

            if (content && type === "input") {
                htmlElement.value = content
            }
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }

        if (id) {
            htmlElement.id = id;
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }
}
