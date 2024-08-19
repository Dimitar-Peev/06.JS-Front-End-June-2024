window.addEventListener("load", solve);

function solve() {

    const placeInput = document.getElementById("place");
    const actionInput = document.getElementById("action");
    const personInput = document.getElementById("person");

    const addButton = document.getElementById("add-btn");

    const taskList = document.getElementById("task-list");
    const doneList = document.getElementById("done-list");

    let formElement = document.querySelector("form");

    addButton.addEventListener("click", addToTasks);

    function addToTasks() {

        let isInvalidInput =
            placeInput.value === ""
            || actionInput.value === ""
            || personInput.value === "";

        if (isInvalidInput) {
            console.log("it's work")
            return;
        }

        let li = document.createElement("li");
        li.className = "clean-task";

        let articleElement = document.createElement("article");

        let placeParagraph = document.createElement("p");
        placeParagraph.textContent = `Place:${placeInput.value}`;
        const placeInputOldValue = placeInput.value;

        let actionParagraph = document.createElement("p");
        actionParagraph.textContent = `Action:${actionInput.value}`;
        const actionInputOldValue = actionInput.value;

        let personParagraph = document.createElement("p");
        personParagraph.textContent = `Person:${personInput.value}`;
        const personInputOldValue = personInput.value;

        articleElement.appendChild(placeParagraph);
        articleElement.appendChild(actionParagraph);
        articleElement.appendChild(personParagraph);

        let divElement = document.createElement("div");
        divElement.className = "buttons";

        let editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.textContent = "Edit";

        let doneButton = document.createElement("button");
        doneButton.classList.add("done");
        doneButton.textContent = "Done";

        divElement.appendChild(editButton);
        divElement.appendChild(doneButton);

        li.appendChild(articleElement);
        li.appendChild(divElement);

        taskList.appendChild(li);

        formElement.reset();

        editButton.addEventListener("click", edit);

        function edit() {
            placeInput.value = placeInputOldValue;
            actionInput.value = actionInputOldValue;
            personInput.value = personInputOldValue;

            taskList.removeChild(li);
        }

        doneButton.addEventListener("click", done);

        function done() {
            taskList.removeChild(li);

            doneList.appendChild(li);

            li.removeChild(divElement);

            let deleteButton = document.createElement("button");
            deleteButton.classList.add("delete");
            deleteButton.textContent = "Delete";

            li.appendChild(deleteButton);

            deleteButton.addEventListener("click", deleteContact);

            function deleteContact() {
                doneList.removeChild(li);
            }
        }
    }
}
