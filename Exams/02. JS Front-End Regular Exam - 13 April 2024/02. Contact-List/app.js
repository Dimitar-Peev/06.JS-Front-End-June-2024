window.addEventListener("load", solve);

function solve() {
    const nameInput = document.getElementById("name");
    const phoneNumberInput = document.getElementById("phone");
    const categoryInput = document.getElementById("category");

    const addButton = document.getElementById("add-btn");
    const checkList = document.getElementById("check-list");
    const contactList = document.getElementById("contact-list");

    const formElement = document.querySelector("form");

    addButton.addEventListener("click", addToCheck);

    function addToCheck() {

        let isInvalidInput =
               nameInput.value === ""
            || phoneNumberInput.value === ""
            || categoryInput.value === "";

        if (isInvalidInput) {
            console.log("it's work")
            return;
        }

        let li = document.createElement("li");

        let articleElement = document.createElement("article");

        let nameParagraph = document.createElement("p");
        nameParagraph.textContent = `name:${nameInput.value}`;
        const nameInputOldValue = nameInput.value;

        let phoneNumberParagraph = document.createElement("p");
        phoneNumberParagraph.textContent = `phone:${phoneNumberInput.value}`;
        const phoneNumberInputOldValue = phoneNumberInput.value;

        let categoryParagraph = document.createElement("p");
        categoryParagraph.textContent = `category:${categoryInput.value}`;
        const categoryInputOldValue = categoryInput.value;

        articleElement.appendChild(nameParagraph);
        articleElement.appendChild(phoneNumberParagraph);
        articleElement.appendChild(categoryParagraph);

        let divElement = document.createElement("div");
        divElement.className = "buttons";

        let editButton = document.createElement("button");
        editButton.classList.add("edit-btn");

        let saveButton = document.createElement("button");
        saveButton.classList.add("save-btn");

        divElement.appendChild(editButton);
        divElement.appendChild(saveButton);

        li.appendChild(articleElement);
        li.appendChild(divElement);

        checkList.appendChild(li);

        formElement.reset();

        editButton.addEventListener("click", edit);

        function edit() {

            nameInput.value = nameInputOldValue;
            phoneNumberInput.value = phoneNumberInputOldValue;
            categoryInput.value = categoryInputOldValue;
            
            checkList.removeChild(li);
        }

        saveButton.addEventListener("click", save);
        function save(){

            checkList.removeChild(li);

            contactList.appendChild(li);

            divElement.removeChild(editButton);
            divElement.removeChild(saveButton);
            li.removeChild(divElement);

            let deleteButton = document.createElement("button");
            deleteButton.classList.add("del-btn");

            li.appendChild(deleteButton);

            deleteButton.addEventListener("click", deleteContact);
            function deleteContact(){
                contactList.removeChild(li);
            }
        }
    }

}
