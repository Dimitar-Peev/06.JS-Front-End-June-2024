window.addEventListener("load", solve);

function solve() {
    const gemNameInputEl = document.getElementById("gem-name");
    const gemColorInputEl = document.getElementById("color");
    const caratsInputEl = document.getElementById("carats");
    const priceInputEl = document.getElementById("price");
    const typeInputEl = document.getElementById("type");

    const previewList = document.getElementById("preview-list");
    const collectionList = document.getElementById("collection");

    const addBtn = document.getElementById("add-btn");

    addBtn.addEventListener("click", (e) => {
        const inputElements = [
            gemNameInputEl,
            gemColorInputEl,
            caratsInputEl,
            priceInputEl,
            typeInputEl,
        ];

        if (inputElements.some(element => element.value === "")) {
            return;
        }

        const previewElement = createPreviewElement(
            gemNameInputEl.value,
            gemColorInputEl.value,
            caratsInputEl.value,
            priceInputEl.value,
            typeInputEl.value,
        );

        previewList.appendChild(previewElement);

        inputElements.forEach(element => element.value = "");

        e.currentTarget.setAttribute("disabled", "disabled");
    });

    function createPreviewElement(name, color, carats, price, type) {
        const articleHeader = document.createElement("h4");
        articleHeader.textContent = name;

        const pColor = document.createElement("p");
        pColor.textContent = `Color: ${color}`;

        const pCarats = document.createElement("p");
        pCarats.textContent = `Carats: ${carats}`;

        const pPrice = document.createElement("p");
        pPrice.textContent = `Price: ${price}$`;

        const pType = document.createElement("p");
        pType.textContent = `Type: ${type}`;

        const articleEl = document.createElement("article");
        articleEl.appendChild(articleHeader);
        articleEl.appendChild(pColor);
        articleEl.appendChild(pCarats);
        articleEl.appendChild(pPrice);
        articleEl.appendChild(pType);

        const saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = "Save to Collection";

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit Information";

        const cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";

        const li = document.createElement("li");
        li.classList.add("gem-info");

        li.appendChild(articleEl);
        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(cancelBtn);

        editBtn.addEventListener("click", (e) => {
            gemNameInputEl.value = name;
            gemColorInputEl.value = color;
            caratsInputEl.value = carats;
            priceInputEl.value = price;
            typeInputEl.value = type;

            e.currentTarget.parentElement.remove();

            addBtn.removeAttribute("disabled");
        });

        saveBtn.addEventListener("click", (e) => {
            const pCollectionItem = document.createElement("p");
            pCollectionItem.classList.add("collection-item");
            pCollectionItem.textContent = `${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`;

            const liCollectionItem = document.createElement("li");
            liCollectionItem.appendChild(pCollectionItem);

            collectionList.appendChild(liCollectionItem);

            e.currentTarget.parentElement.remove();

            addBtn.removeAttribute("disabled");
        });

        cancelBtn.addEventListener("click", (e) => {
            e.currentTarget.parentElement.remove();
            addBtn.removeAttribute("disabled");
        });

        return li;
    }
}
