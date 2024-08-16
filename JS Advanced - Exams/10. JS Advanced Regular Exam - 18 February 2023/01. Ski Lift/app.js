window.addEventListener('load', solve);

function solve() {
    const formRef = document.querySelector("form");
    formRef.addEventListener("submit", onSubmit);

    const firstNameRef = document.getElementById("first-name");
    const lastNameRef = document.getElementById("last-name");
    const peopleCountRef = document.getElementById("people-count");
    const fromDateRef = document.getElementById("from-date");
    const daysCountRef = document.getElementById("days-count");

    const infoTicketUl = document.querySelector("#info-ticket ul");
    const confirmTicketUl = document.querySelector("#confirm-ticket-section ul");
    const nextBtnRef = document.getElementById("next-btn");

    function onSubmit(e) {
        e.preventDefault();
        const firstName = firstNameRef.value;
        const lastName = lastNameRef.value;
        const peopleCount = peopleCountRef.value;
        const fromDate = fromDateRef.value;
        const daysCount = daysCountRef.value;

        if (!firstName || !lastName || !peopleCount || !fromDate || !daysCount) {
            return;
        }

        let ticket = createTicket(firstName, lastName, peopleCount, fromDate, daysCount);

        infoTicketUl.appendChild(ticket);
        toggleButtonNext();
        formRef.reset();
    }

    function createTicket(firstName, lastName, peopleCount, fromDate, daysCount) {
        const li = document.createElement("li");
        li.classList.add("ticket");

        let innerHtmlContent = "<article>";
        innerHtmlContent += `<h3>Name: ${firstName} ${lastName}</h3>`;
        innerHtmlContent += `<p>From date: ${fromDate}</p>`;
        innerHtmlContent += `<p>For ${daysCount} days</p>`;
        innerHtmlContent += `<p>For ${peopleCount} people</p>`;
        innerHtmlContent += "</article>";
        li.innerHTML = innerHtmlContent;

        const editBtn = createBtn("edit-btn", "Edit");
        const continueBtn = createBtn("continue-btn", "Continue");
        editBtn.addEventListener("click", onEdit);
        continueBtn.addEventListener("click", onContinue);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        return li;
    }

    function onEdit(e) {
        const articleChildren = e.currentTarget.parentElement.querySelector("article").children;
        const nameData = articleChildren[0].textContent.split(" ");
        const dateTokens = articleChildren[1].textContent.split(" ");
        const daysCountToken = articleChildren[2].textContent.split(" ");
        const peopleCountToken = articleChildren[3].textContent.split(" ");

        const firstName = nameData[1];
        const lastName = nameData[2];
        const fromDate = dateTokens[2];
        const daysCount = daysCountToken[1];
        const peopleCount = peopleCountToken[1];

        firstNameRef.value = firstName;
        lastNameRef.value = lastName;
        fromDateRef.value = fromDate;
        daysCountRef.value = daysCount;
        peopleCountRef.value = peopleCount;

        toggleButtonNext();
        infoTicketUl.innerHTML = "";
    }

    function onContinue(e) {
        const li = e.currentTarget.parentElement;
        const btns = li.querySelectorAll("button");
        btns[0].remove();
        btns[1].remove();

        const confirmBtn = createBtn("confirm-btn", "Confirm");
        const cancelBtn = createBtn("cancel-btn", "Cancel");

        confirmBtn.addEventListener("click", onConfirm);
        cancelBtn.addEventListener("click", onCancel);
        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);
        confirmTicketUl.appendChild(li);
    }

    function onCancel(e) {
        onDelete(e.target.parentElement);
        toggleButtonNext();
    }

    function createBtn(classes, text) {
        const btn = document.createElement("button");
        classes && btn.classList.add(classes);
        btn.textContent = text;
        return btn;
    }

    function toggleButtonNext() {
        nextBtnRef.disabled = !nextBtnRef.disabled;
    }

    function onDelete(elRef) {
        elRef.remove();
    }
}


    
    
