function addItem() {
    const inputElement = document.querySelector("#newItemText");

    const newListItem = document.createElement("li");
    newListItem.textContent = inputElement.value;

    const deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.textContent = "[Delete]";

    deleteLink.addEventListener("click", deleteItem);
    
    newListItem.appendChild(deleteLink);

    const ulList = document.querySelector("#items");
    ulList.appendChild(newListItem);

    inputElement.value = "";

    function deleteItem(event) {
        const row = event.currentTarget.parentNode;
        row.remove();
    }
}