window.addEventListener('load', solve);

function solve() {
    const inputs = {
        firstNameInput: document.getElementById("first-name"),
        lastNameInput: document.getElementById("last-name"),
        fromDateInput: document.getElementById("from-date"),
        toDateInput: document.getElementById("to-date"),
    }
    const others = {
        nextButton: document.getElementById("next-btn"),
        infoList: document.querySelector(".info-list"),
        confirmList: document.querySelector(".confirm-list"),
        h1Status: document.getElementById("status"),
        okElement: document.getElementById("ok"),
    }

    others.nextButton.addEventListener("click", addToList);

    function addToList() {
        const allFieldsHaveValue = Object.values(inputs).every((input) => input.value !== "");

        if (!allFieldsHaveValue) {
            console.log("EMPTY FIELD");
            return;
        }

        if (new Date(inputs.fromDateInput.value) >= new Date(inputs.toDateInput.value)) {
            return;
        }

        const {firstNameInput, lastNameInput, fromDateInput, toDateInput} = inputs;

        const h3Name = document.createElement("h3");
        h3Name.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

        const pFromDate = document.createElement("p");
        pFromDate.textContent = `From date: ${fromDateInput.value}`;

        const pToDate = document.createElement("p");
        pToDate.textContent = `To date: ${toDateInput.value}`;

        const article = document.createElement("article");
        article.appendChild(h3Name);
        article.appendChild(pFromDate);
        article.appendChild(pToDate);

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";

        const continueBtn = document.createElement("button");
        continueBtn.className = "continue-btn";
        continueBtn.textContent = "Continue";

        const li = document.createElement("li");
        li.className = "vacation-content";
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        others.infoList.appendChild(li);

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

        clearAllInputs();

        others.nextButton.setAttribute("disabled", "");

        editBtn.addEventListener("click", edit);

        function edit() {
            for (const key in inputs) {
                inputs[key].value = savedState[key];
            }

            li.removeChild(editBtn);
            li.removeChild(continueBtn);

            others.infoList.removeChild(li);

            others.nextButton.removeAttribute("disabled");
        }

        continueBtn.addEventListener("click", done);

        function done() {
            others.confirmList.appendChild(li);

            li.removeChild(editBtn);
            li.removeChild(continueBtn);

            const confirmButton = document.createElement("button");
            confirmButton.classList.add("confirm-btn");
            confirmButton.textContent = "Confirm";
            const cancelButton = document.createElement("button");
            cancelButton.classList.add("cancel-btn");
            cancelButton.textContent = "Cancel";

            li.appendChild(confirmButton);
            li.appendChild(cancelButton);

            confirmButton.addEventListener("click", confirmAction);

            function confirmAction() {
                others.confirmList.remove(li);
                others.nextButton.removeAttribute("disabled");
                others.h1Status.classList.add("vacation-confirmed");
                document.querySelector(".vacation-confirmed").textContent = "Vacation Requested";
            }

            cancelButton.addEventListener("click", cancelAction);

            function cancelAction() {
                others.confirmList.remove(li);
                others.nextButton.removeAttribute("disabled");
                others.h1Status.classList.add("vacation-cancelled");
                others.h1Status.textContent = "Cancelled Vacation";
            }

            others.okElement.addEventListener("click", reloadPage);

            function reloadPage() {
                location.reload();
            }

        }
    }

    function clearAllInputs() {
        Object.values(inputs).forEach((input) => {
            input.value = "";
        });
    }
}




    
    
