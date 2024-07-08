function printStoreInfo(currentStock, orderedProducts) {
    const stock = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        if (!stock.hasOwnProperty(product)) {
            stock[product] = quantity;
            // stock.product = quantity;
        } else {
            stock[product] += quantity;
        }
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let product = orderedProducts[i];
        let quantity = Number(orderedProducts[i + 1]);

        if (!stock.hasOwnProperty(product)) {
            stock[product] = quantity;
        } else {
            stock[product] += quantity;
        }
    }

    for (let product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }
}

printStoreInfo(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    [
        "Flour",
        "44",
        "Oil",
        "12",
        "Pasta",
        "7",
        "Tomatoes",
        "70",
        "Bananas",
        "30",
    ]
);
// Chips -> 5
// CocaCola -> 9
// Bananas -> 44
// Pasta -> 11
// Beer -> 2
// Flour -> 44
// Oil -> 12
// Tomatoes -> 70

printStoreInfo(
    ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
    ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
// Salt -> 2
// Fanta -> 4
// Apple -> 21
// Water -> 4
// Juice -> 5
// Sugar -> 44
// Oil -> 12
// Tomatoes -> 7
// Bananas -> 30
