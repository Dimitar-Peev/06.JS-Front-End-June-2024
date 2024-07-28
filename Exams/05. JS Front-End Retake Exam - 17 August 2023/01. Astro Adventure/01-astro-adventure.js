function astroAdventure(inputArr) {
    let n = Number(inputArr.shift());
    const astronauts = [];

    while (n-- > 0) {
        const [name, oxygen, energy] = inputArr.shift().split(" ");
        const newObject = {
            name,
            oxygen: Number(oxygen),
            energy: Number(energy),
        };
        astronauts.push(newObject);
    }

    while (inputArr.length > 0) {
        const inputLine = inputArr.shift();

        if (inputLine === "End") {
            break;
        }

        const [command, astronautName, value] = inputLine.split(" - ");

        const astronaut = astronauts.find(astronaut => astronaut.name === astronautName);
        const amount = Number(value);

        switch (command) {
            case "Explore":
                const energyNeeded = amount;

                if (astronaut && astronaut.energy >= energyNeeded) {
                    astronaut.energy -= energyNeeded;
                    console.log(`${astronautName} has successfully explored a new area and now has ${astronaut.energy} energy!`);
                } else if (astronaut) {
                    console.log(`${astronautName} does not have enough energy to explore!`)
                }
                break;
            case "Refuel":
                if (astronaut) {
                    const energyRecovered = Math.min(amount, 200 - astronaut.energy);
                    astronaut.energy += energyRecovered;
                    console.log(`${astronautName} refueled their energy by ${energyRecovered}!`)
                }
                break;
            case "Breathe":
                if (astronaut) {
                    const oxygenRecovered = Math.min(amount, 100 - astronaut.oxygen);
                    astronaut.oxygen += oxygenRecovered;
                    console.log(`${astronautName} took a breath and recovered ${oxygenRecovered} oxygen!`);
                }
                break;
        }
    }

    for (const astronaut of astronauts) {
        console.log(`Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`);
    }

}


astroAdventure(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']
);

astroAdventure(['4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']
);