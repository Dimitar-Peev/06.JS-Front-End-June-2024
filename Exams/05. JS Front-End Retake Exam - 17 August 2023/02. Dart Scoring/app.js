window.addEventListener("load", solve);

function solve() {
    const playerNameInput = document.getElementById("player");
    const scoreInput = document.getElementById("score");
    const roundInput = document.getElementById("round");

    const addButton = document.getElementById("add-btn");
    const clearButton = document.querySelector(".clear");

    const reviewList = document.getElementById("sure-list");
    const publishedList = document.getElementById("scoreboard-list");

    const formElement = document.querySelector(".scoring-content");

    addButton.addEventListener("click", addToDart);

    function addToDart() {
        const isInvalidInput =
            playerNameInput.value === "" ||
            scoreInput.value === "" ||
            roundInput.value === "";

        if (isInvalidInput) {
            return;
        }

        const li = document.createElement("li");
        li.className = "dart-item";

        const articleElement = document.createElement("article");

        const nameParagraph = document.createElement("p");
        nameParagraph.textContent = playerNameInput.value;
        const playerNameInputOldValue = playerNameInput.value;

        const scoreParagraph = document.createElement("p");
        scoreParagraph.textContent = `Score: ${scoreInput.value}`;
        const scoreInputOldValue = scoreInput.value;

        const roundParagraph = document.createElement("p");
        roundParagraph.textContent = `Round: ${roundInput.value}`;
        const roundInputOldValue = roundInput.value;

        articleElement.appendChild(nameParagraph);
        articleElement.appendChild(scoreParagraph);
        articleElement.appendChild(roundParagraph);

        const editButton = document.createElement("button");
        editButton.classList.add("btn");
        editButton.classList.add("edit");
        editButton.textContent = "edit";
        editButton.addEventListener("click", edit);

        const postButton = document.createElement("button");
        postButton.classList.add(["btn"], ["ok"]);
        postButton.textContent = "ok";
        postButton.addEventListener("click", post);

        li.appendChild(articleElement);
        li.appendChild(editButton);
        li.appendChild(postButton);

        reviewList.appendChild(li);

        addButton.disabled = true;
        formElement.reset();

        function edit() {
            playerNameInput.value = playerNameInputOldValue;
            scoreInput.value = scoreInputOldValue;
            roundInput.value = roundInputOldValue;

            reviewList.removeChild(li);

            addButton.disabled = false;
        }

        function post() {
            reviewList.removeChild(li);
            publishedList.appendChild(li);

            li.removeChild(postButton);
            li.removeChild(editButton);

            addButton.disabled = false;

            clearButton.addEventListener("click", () => {
                location.reload();
            });
        }
    }
}
