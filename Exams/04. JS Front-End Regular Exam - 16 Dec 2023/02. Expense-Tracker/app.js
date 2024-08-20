window.addEventListener("load", solve);

function solve() {

    const savedState = {
        nameInput: null,
        phoneInput: null,
        categoryInput: null,
    }

    const inputs = {
        expenseTypeInput: document.getElementById("expense"),
        amountInput: document.getElementById("amount"),
        dateInput: document.getElementById("date"),
    }

    const others = {
        addButton: document.getElementById("add-btn"),
        deleteButton: document.querySelector(".btn.delete"),
        previewList: document.getElementById("preview-list"),
        expensesList: document.getElementById("expenses-list"),
    }

    others.addButton.addEventListener("click", addToTasks);

    function addToTasks() {

        const allFieldsHaveValue = Object.values(inputs).some((input) => input.value === "");

        if (allFieldsHaveValue) {
            console.log("EMPTY FIELD");
            return;
        }

        const li = createLiElement();

        others.previewList.appendChild(li);

        for (const key in inputs) {
            savedState[key] = inputs[key].value;
        }

        others.addButton.setAttribute("disabled", "disabled");
        document.querySelector("#form-container > form").reset();

        const editButtonElement = document.querySelector(".btn.edit");
        editButtonElement.addEventListener("click", edit);

        function edit() {
            for (const key in inputs) {
                inputs[key].value = savedState[key];
            }

            others.previewList.removeChild(li);
            others.addButton.removeAttribute("disabled");
        }

        const okButtonElement = document.querySelector(".btn.ok");
        okButtonElement.addEventListener("click", done);

        function done(e) {
            others.expensesList.appendChild(li);

            li.removeChild(document.querySelector(".buttons"));

            others.addButton.removeAttribute("disabled");
        }
    }

    others.deleteButton.addEventListener("click", deleteExpenses);

    function deleteExpenses() {
        others.expensesList.innerHTML = "";
    }

    function createLiElement() {
        const li = document.createElement("li");
        li.className = "expense-item";

        const article = document.createElement("article");

        const pType = document.createElement("p");
        pType.textContent = `Type: ${inputs.expenseTypeInput.value}`;

        const pAmount = document.createElement("p");
        pAmount.textContent = `Amount: ${inputs.amountInput.value}$`;

        const pDate = document.createElement("p");
        pDate.textContent = `Date: ${inputs.dateInput.value}`;

        article.appendChild(pType);
        article.appendChild(pAmount);
        article.appendChild(pDate);

        const divContainer = document.createElement("div");
        divContainer.className = "buttons";

        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "edit");
        editBtn.textContent = "edit";

        const okBtn = document.createElement("button");
        okBtn.classList.add("btn", "ok");
        okBtn.textContent = "ok";

        divContainer.appendChild(editBtn);
        divContainer.appendChild(okBtn);

        li.appendChild(article);
        li.appendChild(divContainer);

        return li;
    }

}
