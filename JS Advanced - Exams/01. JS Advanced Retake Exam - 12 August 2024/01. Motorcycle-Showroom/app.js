window.addEventListener("load", solve);

function solve() {
    const inputs = {
        colorInput: document.getElementById("colors"),
        modelInput: document.getElementById("motorcycles"),
        dateInput: document.getElementById("datetime"),
        nameInput: document.getElementById("full-name"),
        emailInput: document.getElementById("email"),
    }
    const others = {
        addButton: document.getElementById("test-ride-btn"),
        previewList: document.getElementById("preview-list"),
        completeList: document.getElementById("complete-list"),
        dataView: document.querySelector(".data-view"),
    }

    others.addButton.addEventListener("click", addToList);

    function addToList() {

        const allFieldsHaveValue = Object.values(inputs).every((input) => input.value !== "");

        if (!allFieldsHaveValue) {
            console.log("EMPTY FIELD");
            return;
        }

        const {colorInput, modelInput, dateInput, nameInput, emailInput} = inputs;

        const pColor = document.createElement("p");
        pColor.textContent = `Color: ${colorInput.value}`;

        const pModel = document.createElement("p");
        pModel.textContent = `Model: ${modelInput.value}`;

        const pName = document.createElement("p");
        pName.textContent = `For: ${nameInput.value}`;

        const pEmail = document.createElement("p");
        pEmail.textContent = `Contact: ${emailInput.value}`;

        const pDate = document.createElement("p");
        pDate.textContent = `Test Ride On: ${dateInput.value}`;

        const article = document.createElement("article");
        article.appendChild(pColor);
        article.appendChild(pModel);
        article.appendChild(pName);
        article.appendChild(pEmail);
        article.appendChild(pDate);

        const div = document.createElement("div");
        div.className = "btn-container";

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";

        const nextBtn = document.createElement("button");
        nextBtn.className = "next-btn";
        nextBtn.textContent = "Next";

        div.appendChild(editBtn);
        div.appendChild(nextBtn);

        const li = document.createElement("li");
        li.appendChild(article);
        li.appendChild(div);

        others.previewList.appendChild(li);

        const savedState = {
            colorInput: null,
            modelInput: null,
            dateInput: null,
            nameInput: null,
            emailInput: null,
        }

        for (const key in inputs) {
            savedState[key] = inputs[key].value;
        }

        document.querySelector("#content > div > form").reset();

        others.addButton.setAttribute("disabled", "");

        editBtn.addEventListener("click", edit);

        function edit() {
            for (const key in inputs) {
                inputs[key].value = savedState[key];
            }

            others.previewList.removeChild(li);

            others.addButton.removeAttribute("disabled");
        }

        nextBtn.addEventListener("click", done);

        function done() {
            others.completeList.appendChild(li);

            li.removeChild(div);

            const completeButton = document.createElement("button");
            completeButton.classList.add("complete-btn");
            completeButton.textContent = "Complete";

            li.appendChild(completeButton);

            completeButton.addEventListener("click", deleteContact);

            function deleteContact() {
                others.completeList.remove(li);

                const testRideButton = document.createElement("button");
                testRideButton.classList.add("confirm-btn");
                testRideButton.textContent = "Your Test Ride is Confirmed";

                others.dataView.appendChild(testRideButton);

                testRideButton.addEventListener("click", reload);

                function reload() {
                    location.reload();
                }
            }
        }

    }
}
