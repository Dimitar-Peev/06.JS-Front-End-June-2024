window.addEventListener("load", solve);

function solve() {
    const inputs = {
        nameInput: document.getElementById("name"),
        timeInput: document.getElementById("time"),
        descriptionInput: document.getElementById("description"),
    }

    const others = {
        addButton: document.getElementById("add-btn"),
        taskList: document.getElementById("preview-list"),
        doneList: document.getElementById("archive-list"),
    }

    others.addButton.addEventListener("click", addToTasks);

    function addToTasks(e) {
        e.preventDefault();

        let isInvalidInput =
            inputs.nameInput.value === ""
            || inputs.timeInput.value === ""
            || inputs.descriptionInput.value === "";

        if (isInvalidInput) {
            console.log("it's work")
            return;
        }

        const li = document.createElement("li");

        let articleElement = document.createElement("article");

        let pName = document.createElement("p");
        pName.textContent = inputs.nameInput.value;

        let pTime = document.createElement("p");
        pTime.textContent = inputs.timeInput.value;

        let pDescription = document.createElement("p");
        pDescription.textContent = inputs.descriptionInput.value;

        articleElement.appendChild(pName);
        articleElement.appendChild(pTime);
        articleElement.appendChild(pDescription);

        let divElement = document.createElement("div");
        divElement.className = "buttons";

        let editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit";

        let nextButton = document.createElement("button");
        nextButton.classList.add("next-btn");
        nextButton.textContent = "Next";

        divElement.appendChild(editButton);
        divElement.appendChild(nextButton);

        li.appendChild(articleElement);
        li.appendChild(divElement);

        others.taskList.appendChild(li);

        const savedState = {
            nameInput: null,
            timeInput: null,
            descriptionInput: null,
        }

        for (const key in inputs) {
            savedState[key] = inputs[key].value;
        }

        document.querySelector("#add-event > form").reset();
        others.addButton.setAttribute("disabled", "");

        editButton.addEventListener("click", edit);

        function edit() {
            for (const key in inputs) {
                inputs[key].value = savedState[key];
            }

            others.taskList.removeChild(li);
            others.addButton.removeAttribute("disabled");
        }

        nextButton.addEventListener("click", done);

        function done() {
            others.taskList.removeChild(li);

            others.doneList.appendChild(li);

            li.removeChild(divElement);

            const archiveButton = document.createElement("button");
            archiveButton.classList.add("archive-btn");
            archiveButton.textContent = "Archive";

            li.appendChild(archiveButton);

            archiveButton.addEventListener("click", deleteContact);

            function deleteContact() {
                others.doneList.removeChild(li);
                others.addButton.removeAttribute("disabled");
            }
        }
    }
}