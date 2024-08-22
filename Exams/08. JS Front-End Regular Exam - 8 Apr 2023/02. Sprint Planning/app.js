window.addEventListener('load', solve);

function solve() {
    // Видео - 25 юли 2023 - Александър Кондов

    const tasksContainer = {}; // празен обект в който ще съхранявам създадените task-ове,
    // като ги добавям по ID защото очаквам че после ще трябва да ги трия

    // събирам си Input полетата
    const inputSelectors = {
        title: document.querySelector("#title"),
        description: document.querySelector("#description"),
        label: document.querySelector("#label"),
        points: document.querySelector("#points"),
        assignee: document.querySelector("#assignee"),
    };

    // събирам си бутоните
    const selectors = {
        hiddenTaskId: document.querySelector("#task-id"),
        createButton: document.querySelector("#create-task-btn"),
        deleteButton: document.querySelector("#delete-task-btn"),
        tasksSection: document.querySelector("#tasks-section"),
        totalPoints: document.querySelector("#total-sprint-points"),
    }

    const icons = {
        Feature: "&#8865;",
        "Low Priority Bug": "&#9737;",
        "High Priority Bug": "&#9888;",
    };

    const labelClasses = {
        Feature: "feature",
        "Low Priority Bug": "low-priority",
        "High Priority Bug": "high-priority",
    };

    // console.log(tasksContainer)

    selectors.createButton.addEventListener("click", createTask);
    selectors.deleteButton.addEventListener("click", deleteTask);

//----------------------------------------------------------------------------------------------------------------------
    function createTask() {

        // You have to fill out ALL of the input fields, otherwise clicking on the [Create Task] button shouldn't do anything!
        // Обхождаме Input полетата за да проверим дали някое от тях е празно
        const isInvalid = Object.values(inputSelectors).some((selector) => selector.value === "");
        if (isInvalid) {
            return;
        }

        // alert("works");

        // task обект
        const task = {
            id: `task-${Object.values(tasksContainer).length + 1}`,
            title: inputSelectors.title.value,
            description: inputSelectors.description.value,
            label: inputSelectors.label.value,
            points: Number(inputSelectors.points.value),
            assignee: inputSelectors.assignee.value,
        };

        // console.log(task)

        tasksContainer[task.id] = task; // съхранявам новосъздаденият task във обекта с task-овете

        const articleElement = createElement("article", null, ["task-card"], task.id);

        createElement("div", `${task.label} ${icons[task.label]}`, ["task-card-label", labelClasses[task.label]], null, articleElement, true);
        createElement("h3", task.title, ["task-card-title"], null, articleElement);
        createElement("p", task.description, ["task-card-description"], null, articleElement);
        createElement("div", `Estimated at ${task.points} pts`, ["task-card-points"], null, articleElement);
        createElement("div", `Assigned to: ${task.assignee}`, ["task-card-assignee"], null, articleElement);

        const taskActions = createElement("div", null, ["task-card-actions"], null, articleElement);

        const button = createElement("button", "Delete", [], null, taskActions);
        button.addEventListener("click", loadConfirmDelete);

        selectors.tasksSection.appendChild(articleElement);

        // On the upper right corner of the page, there is a total points paragraph that needs to be updated.
        // When creating a new task add the new estimation points to that counter.
        calculatePoints();

        // Reset-вам form
        Object.values(inputSelectors).forEach((selector) => (selector.value = ""));
    }

    function loadConfirmDelete(e) {
        const taskId = e.currentTarget.parentElement.parentElement.getAttribute("id");

        Object.keys(inputSelectors).forEach((key) => {
            const selector = inputSelectors[key];
            selector.value = tasksContainer[taskId][key];
            selector.disabled = true;
        });

        selectors.hiddenTaskId.value = taskId;
        selectors.createButton.disabled = true;
        // selectors.deleteButton.removeAttribute('disabled');
        selectors.deleteButton.disabled = false;
    }

    // 
    function deleteTask() {
        // Clicking on the [Delete Task] button should remove the element from the DOM.
        const taskId = selectors.hiddenTaskId.value;
        const taskElement = document.querySelector(`#${taskId}`);
        taskElement.remove();
        delete tasksContainer[taskId];

        // Clear out all of the fields and enable them again after deleting.
        Object.values(inputSelectors).forEach((selector) => {
            selector.value = "";
            selector.disabled = false;
        });

        // Enable the [Create Task] button
        selectors.createButton.disabled = false;
        // and disable the [Delete Task] button.
        selectors.deleteButton.disabled = true;

        // After successfully deleting a task from the form, 
        // subtract the estimation points of the deleted task from the total points.
        calculatePoints();
    }

    function calculatePoints() {
        const totalPoints = Object.values(tasksContainer).reduce(
            (acc, current) => acc + current.points,
            0
        );

        selectors.totalPoints.textContent = `Total Points ${totalPoints}pts`;
    }

    function createElement(type, text, classes, id, parent, useInnerHTML) {
        const element = document.createElement(type);

        if (useInnerHTML && text) {
            element.innerHTML = text;
        } else if (text) {
            element.textContent = text;
        }

        if (classes && classes.length > 0) {
            element.classList.add(...classes);
        }

        if (id) {
            element.setAttribute("id", id);
        }

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }

}
