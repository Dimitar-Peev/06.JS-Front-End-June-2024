function shoppingList(inputArr) {
    let list = inputArr.shift().split("!");

    let inputLine = inputArr.shift();
    while (inputLine !== "Go Shopping!") {
        const commandArray = inputLine.split(" ");
        const command = commandArray.shift();
        const item = commandArray.shift();

        switch (command) {
            case "Urgent":
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;
            case "Unnecessary":
                if (list.includes(item)) {
                    const findedItem = list.indexOf(item);
                    list.splice(findedItem, 1);
                }
                break;
            case "Correct":
                const newItem = commandArray.shift();
                if (list.includes(item)) {
                    const findedItem = list.indexOf(item);
                    list[findedItem] = newItem;
                }
                break;
            case "Rearrange":
                if (list.includes(item)) {
                    const findedItem = list.indexOf(item);
                    list.splice(findedItem, 1);
                    list.push(item)
                }
                break;
        }

        inputLine = inputArr.shift();
    }

    console.log(list.join(", "));
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
