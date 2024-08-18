function attachEvents() {

    const baseUrl = "http://localhost:3030/jsonstore/matches";

    const others = {
        loadBtn: document.getElementById("load-matches"),
        addBtn: document.getElementById("add-match"),
        editBtn: document.getElementById("edit-match"),
        listRecords: document.getElementById("list"),
        formContainer: document.querySelector("#form > form"),
    }

    const inputElements = {
        host: document.getElementById("host"),
        score: document.getElementById("score"),
        guest: document.getElementById("guest"),
    }

    others.loadBtn.addEventListener("click", loadRecords);

    function loadRecords(event) {
        event?.preventDefault;

        fetch(baseUrl)
            .then((data) => data.json())
            .then((recordsResult) => {
                others.listRecords.innerText = "";

                const recordListFragment = document.createDocumentFragment();

                Object.values(recordsResult)
                    .forEach(record => {
                        recordListFragment.appendChild(createRecordElement(record));
                    });

                others.listRecords.appendChild(recordListFragment);

                others.editBtn.setAttribute("disabled", "");
            })
            .catch((err) => {
                console.error(err)
            });
    }

    function createRecordElement(record) {
        const li = document.createElement("li");
        li.className = "match";

        const div = document.createElement("div");
        div.className = "info";

        const pHost = document.createElement("p");
        pHost.textContent = record.host;

        const pScore = document.createElement("p");
        pScore.textContent = record.score;

        const pGuest = document.createElement("p");
        pGuest.textContent = record.guest;

        div.append(pHost, pScore, pGuest);

        const divButtons = document.createElement("div");
        divButtons.className = "btn-wrapper";

        const changeBtn = document.createElement("button");
        changeBtn.className = "change-btn";
        changeBtn.textContent = "Change";
        changeBtn.addEventListener("click", (event) => changeRecord(event, record));

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        divButtons.append(changeBtn, deleteBtn);

        li.appendChild(div)
        li.appendChild(divButtons);

        li.setAttribute("data-id", record._id);

        return li;
    }

    others.addBtn.addEventListener("click", addRecord);

    function addRecord() {
        const record = getInputData();
        others.formContainer.reset();

        fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(record),
        })
            .then(response => {
                if (!response.ok) {
                    return;
                }

                return loadRecords();
            })
            .catch((err) => {
                console.error(err)
            });
    }

    function changeRecord(e, record) {

        for (const key in inputElements) {
            inputElements[key].value = record[key];
        }

        others.formContainer.setAttribute("data-id", record._id);

        others.editBtn.removeAttribute("disabled");

        others.addBtn.setAttribute("disabled", "");
    }

    others.editBtn.addEventListener("click", editRecord);

    function editRecord() {
        const record = getInputData();

        const recordId = others.formContainer.getAttribute("data-id");

        others.formContainer.removeAttribute("data-id");

        fetch(`${baseUrl}/${recordId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...record, _id: recordId})
        })
            .then(response => {
                if (!response.ok) {
                    return;
                }

                loadRecords();

                others.editBtn.setAttribute("disabled", "");

                others.addBtn.removeAttribute("disabled");

                others.formContainer.reset();


            })
            .catch((err) => {
                console.error(err)
            });
    }

    others.listRecords.addEventListener("click", deleteRecord);

    function deleteRecord(e) {
        if (e.target.tagName !== "BUTTON" || !e.target.classList.contains("delete-btn")) {
            return;
        }

        const recordElement = e.target.closest(".match");

        const recordId = recordElement.getAttribute("data-id");

        fetch(`${baseUrl}/${recordId}`, {
            method: "DELETE",
        })
            .then(response => {
                if (!response.ok) {
                    return;
                }

                recordElement.remove();
            })
            .catch((err) => {
                console.error(err)
            });

    }

    function getInputData() {
        return {
            host: inputElements.host.value,
            score: inputElements.score.value,
            guest: inputElements.guest.value,
        };
    }
}

attachEvents();