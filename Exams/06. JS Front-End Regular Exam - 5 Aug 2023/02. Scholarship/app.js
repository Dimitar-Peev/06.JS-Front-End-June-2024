window.addEventListener("load", solve);

function solve() {
    const studentNameInput = document.getElementById("student");
    const universityInput = document.getElementById("university");
    const scoreInput = document.getElementById("score");

    const nextButton = document.getElementById("next-btn");

    const previewList = document.getElementById("preview-list");
    const candidatesList = document.getElementById("candidates-list");

    nextButton.addEventListener("click", (e) => {
        e.preventDefault();

        let isInvalidInput =
            studentNameInput.value === ""
            || universityInput.value === ""
            || scoreInput.value === "";

        if (isInvalidInput) {
            return;
        }

        const li = document.createElement("li");
        li.className = "application";

        const articleElement = document.createElement("article");

        let studentNameHeader = document.createElement("h4");
        studentNameHeader.textContent = studentNameInput.value;
        const studentNameInputOldValue = studentNameInput.value;

        let universityParagraph = document.createElement("p");
        universityParagraph.textContent = `University: ${universityInput.value}`;
        const universityInputOldValue = universityInput.value;

        let scoreParagraph = document.createElement("p");
        scoreParagraph.textContent = `Score: ${scoreInput.value}`;
        const scoreInputOldValue = scoreInput.value;

        const editButton = document.createElement("button");
        editButton.classList.add("action-btn");
        editButton.classList.add("edit");
        editButton.textContent = "edit";

        const applyButton = document.createElement("button");
        applyButton.classList.add("action-btn");
        applyButton.classList.add("apply");
        applyButton.textContent = "apply";

        articleElement.appendChild(studentNameHeader);
        articleElement.appendChild(universityParagraph);
        articleElement.appendChild(scoreParagraph);

        li.appendChild(articleElement);
        li.appendChild(editButton);
        li.appendChild(applyButton);

        previewList.appendChild(li);

        clearFrom();

        nextButton.setAttribute("disabled", true);

        editButton.addEventListener("click", (e) => {
            const studentName = previewList.querySelector("h4").textContent;
            const paragraphElements = previewList.querySelectorAll("article p");
            const [universityElement, scoreElement] = Array.from(paragraphElements);

            studentNameInput.value = studentName;
            universityInput.value = universityElement.textContent.split(": ")[1];
            scoreInput.value = scoreElement.textContent.split(": ")[1];

            previewList.innerHTML = "";

            nextButton.removeAttribute("disabled");

        });

        applyButton.addEventListener("click", (e) => {
            editButton.remove();
            applyButton.remove();

            candidatesList.appendChild(li);

            previewList.innerHTML = "";

            nextButton.removeAttribute("disabled");
        });
    })

    function clearFrom() {
        studentNameInput.value = "";
        universityInput.value = "";
        scoreInput.value = "";
    }

}
  