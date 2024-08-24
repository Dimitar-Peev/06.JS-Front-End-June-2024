window.addEventListener("load", solve);

function solve() {
    const typeInput = document.getElementById("type");
    const ageInput = document.getElementById("age");
    const genderInput = document.getElementById("gender");

    const adoptButton = document.getElementById("adopt-btn");
    const adoptInfo = document.getElementById("adoption-info");
    const adoptedList = document.getElementById("adopted-list");
    const formElement = document.querySelector("form");

    adoptButton.addEventListener("click", addToCheck);

    function addToCheck(e) {

        let isInvalidInput =
            typeInput.value === ""
            || ageInput.value === ""
            || genderInput.value === "";

        if (isInvalidInput) {
            console.log("it's work")
            return;
        }

        let li = document.createElement("li");

        let articleElement = document.createElement("article");

        let typeParagraph = document.createElement("p");
        typeParagraph.textContent = `Pet:${typeInput.value}`;
        const typeInputOldValue = typeInput.value;

        let genderParagraph = document.createElement("p");
        genderParagraph.textContent = `Gender:${genderInput.value}`;
        const genderInputOldValue = genderInput.value;

        let ageParagraph = document.createElement("p");
        ageParagraph.textContent = `Age:${ageInput.value}`;
        const ageInputOldValue = ageInput.value;

        articleElement.appendChild(typeParagraph);
        articleElement.appendChild(genderParagraph);
        articleElement.appendChild(ageParagraph);

        let divElement = document.createElement("div");
        divElement.className = "buttons";

        let editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";

        let doneButton = document.createElement("button");
        doneButton.classList.add("done-btn");
        doneButton.textContent = "Done";

        divElement.appendChild(editButton);
        divElement.appendChild(doneButton);

        li.appendChild(articleElement);
        li.appendChild(divElement);

        adoptInfo.appendChild(li);

        formElement.reset();

        editButton.addEventListener("click", edit);

        function edit() {
            typeInput.value = typeInputOldValue;
            ageInput.value = ageInputOldValue;
            genderInput.value = genderInputOldValue;

            adoptInfo.removeChild(li);
        }

        doneButton.addEventListener("click", save);

        function save() {
            adoptInfo.removeChild(li);
            adoptedList.appendChild(li);

            divElement.removeChild(editButton);
            divElement.removeChild(doneButton);
            li.removeChild(divElement);

            let clearButton = document.createElement("button");
            clearButton.classList.add("clear-btn");
            clearButton.textContent = "Clear";

            li.appendChild(clearButton);

            clearButton.addEventListener("click", deleteTask);

            function deleteTask() {
                adoptedList.removeChild(li);
            }
        }
    }
}