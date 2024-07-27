function cafeteria(input) {
    let n = Number(input.shift());
    const baristas = {};

    while (n-- > 0) {
        const baristasDetails = input.shift();
        const [name, shift, coffeeTypes] = baristasDetails.split(" ");

        baristas[name] = {
            shift,
            coffeeTypes: coffeeTypes.split(","),
        }
    }

    let commandLine = input.shift();
    while (commandLine !== "Closed") {
        const commandArray = commandLine.split(" / ");
        const command = commandArray.shift();
        const baristaName = commandArray.shift();

        switch (command) {
            case "Prepare":
                const shift = commandArray.shift();
                const coffeeType = commandArray.shift();

                if (baristas[baristaName].shift === shift && baristas[baristaName].coffeeTypes.includes(coffeeType)) {
                    console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
                }
                break;
            case "Change Shift":
                const newShift = commandArray.shift();
                baristas[baristaName].shift = newShift;
                console.log(`${baristaName} has updated his shift to: ${newShift}`);
                break;
            case "Learn":
                const newCoffeeType = commandArray.shift();
                if (baristas[baristaName].coffeeTypes.includes(newCoffeeType)) {
                    console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
                } else {
                    baristas[baristaName].coffeeTypes.push(newCoffeeType);
                    console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
                }
                break;
        }

        commandLine = input.shift();
    }

    for (const baristaName in baristas) {
        console.log(`Barista: ${baristaName}, Shift: ${baristas[baristaName].shift}, Drinks: ${baristas[baristaName].coffeeTypes.join(", ")}`);
    }
}

cafeteria([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed',
]);

cafeteria(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed']);

cafeteria(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Change Shift / Bob / day',
    'Prepare / Carol / day / Cappuccino',
    'Learn / Bob / Mocha',
    'Closed']);
