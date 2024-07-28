function motoGP(inputArr) {
    let n = Number(inputArr.shift());
    const ridersMap = {};

    while (n-- > 0) {
        const riderLine = inputArr.shift();

        const [name, fuel, position] = riderLine.split("|");
        ridersMap[name] = {
            fuel: Number(fuel),
            position: Number(position)
        };
    }

    let inputLine = inputArr.shift();
    while (inputLine !== "Finish") {
        const commandArray = inputLine.split(" - ");
        const command = commandArray.shift();
        const rider = commandArray.shift();

        switch (command) {
            case "StopForFuel":
                const minimumFuel = Number(commandArray.shift());
                const changedPosition = Number(commandArray.shift());
                if (ridersMap[rider].fuel < minimumFuel) {
                    ridersMap[rider].position = changedPosition;
                    console.log(rider + " stopped to refuel but lost his position, now he is " + changedPosition + ".");
                } else {
                    console.log(rider + " does not need to stop for fuel!");
                }
                break;
            case "Overtaking":
                const secondRider = commandArray.shift();

                const firstRiderPosition = ridersMap[rider].position;
                const secondRiderPosition = ridersMap[secondRider].position;

                if (firstRiderPosition < secondRiderPosition) {
                    ridersMap[rider].position = secondRiderPosition;
                    ridersMap[secondRider].position = firstRiderPosition;
                    console.log(`${rider} overtook ${secondRider}!`);
                }
                break;
            case "EngineFail":
                const lapsLeft = commandArray.shift();

                delete ridersMap[rider];

                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;
        }

        inputLine = inputArr.shift();
    }

    for (const riderKey in ridersMap) {
        console.log(riderKey);
        console.log(`  Final position: ${ridersMap[riderKey].position}`);
    }

}

motoGP(["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]);

motoGP(["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]);

motoGP(["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Johann Zarco|70|4",
    "Andrea Dovizioso|60|5",
    "Overtaking - Valentino Rossi - Andrea Dovizioso",
    "StopForFuel - Johann Zarco - 80 - 3",
    "EngineFail - Marc Marquez - 10",
    "Finish"]);