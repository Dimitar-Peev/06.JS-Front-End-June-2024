function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/phonebook/";

    const phoneBookContainer = document.getElementById("phonebook");
    const loadBtn = document.getElementById("btnLoad");

    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");
    const createBtn = document.getElementById("btnCreate");

    loadBtn.addEventListener("click", loadPhoneBookHandler);

    async function loadPhoneBookHandler() {
        try {
            const phoneBookRes = await fetch(BASE_URL);
            let phoneBookData = await phoneBookRes.json();
            phoneBookData = Object.values(phoneBookData);
            phoneBookContainer.innerHTML = "";

            for (const {person, phone, _id} of phoneBookData) {
                const li = document.createElement("li");
                phoneBookContainer.appendChild(li);
                li.innerHTML = `${person}: ${phone}`;

                const deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Delete";
                li.appendChild(deleteButton);

                deleteButton.id = _id;
                deleteButton.addEventListener("click", deletePhoneBookRecordHandler);
            }
        } catch (error) {
            console.log(error);
        }
    }

    createBtn.addEventListener("click", createPhoneBookHandler);

    function createPhoneBookHandler() {
        const person = personInput.value;
        const phone = phoneInput.value;

        const httpHeaders = {
            method: "POST",
            body: JSON.stringify({person, phone}),
        };

        fetch(BASE_URL, httpHeaders)
            .then((response) => response.json())
            .then(() => {
                loadPhoneBookHandler();
                personInput.value = "";
                phoneInput.value = "";
            });
    }

    async function deletePhoneBookRecordHandler(e) {
        const id = this.id;

        const httpHeaders = {
            method: "DELETE",
        };

        fetch(BASE_URL + id, httpHeaders)
            .then((response) => response.json())
            .then(loadPhoneBookHandler);
    }
}

attachEvents();
