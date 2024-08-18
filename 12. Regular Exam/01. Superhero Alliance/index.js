function solve(inputArr) {
    const n = Number(inputArr.shift());

    const heroArr = inputArr.splice(0, n);

    const heroMap = {};
    heroArr.forEach(el => {
        const name = el.split("-")[0];
        const power= el.split("-")[1];
        const energy= Number(el.split("-")[2]);

        heroMap[name] = {
            power: power.split(","),
            energy,
        };
    });

    let inputLine = inputArr.shift();
    while (inputLine !== "Evil Defeated!") {
        const commandArray = inputLine.split(" * ");
        const command = commandArray.shift();
        const superheroName = commandArray.shift();

        switch (command) {
            case "Use Power":
                const superPower = commandArray.shift();
                const energyRequired = Number(commandArray.shift());

                if ((heroMap[superheroName].power).includes(superPower) && heroMap[superheroName].energy >= energyRequired) {
                    heroMap[superheroName].energy -= energyRequired;
                    console.log(`${superheroName} has used ${superPower} and now has ${heroMap[superheroName].energy} energy!`);
                } else {
                    console.log(`${superheroName} is unable to use ${superPower} or lacks energy!`);

                }
                break;
            case "Train":
                const trainingEnergy = Number(commandArray.shift());

                if(heroMap[superheroName].energy === 100){
                    console.log(`${superheroName} is already at full energy!`);
                } else {
                    const energyRecovered = Math.min(trainingEnergy, 100 - heroMap[superheroName].energy);
                    heroMap[superheroName].energy += energyRecovered;
                    console.log(`${superheroName} has trained and gained ${energyRecovered} energy!`);
                }
                break;
            case "Learn":
                const newSuperPower = commandArray.shift();

                if (heroMap[superheroName].power.includes(newSuperPower)) {
                    console.log(`${superheroName} already knows ${newSuperPower}.`);
                } else {
                    if (newSuperPower !== "") {
                        heroMap[superheroName].power.push(newSuperPower);
                        console.log(`${superheroName} has learned ${newSuperPower}!`);
                    }

                }
                break;
        }

        inputLine = inputArr.shift();
    }

    for (const hero in heroMap) {
        console.log(`Superhero: ${hero}\n- Superpowers: ${heroMap[hero].power.join(", ")}\n- Energy: ${heroMap[hero].energy}`);
    }

}

solve(([
        "3",
        "Iron Man-Repulsor Beams,Flight-80",
        "Thor-Lightning Strike,Hammer Throw-10",
        "Hulk-Super Strength-60",
        "Use Power * Iron Man * Flight * 30",
        "Train * Thor * 20",
        "Train * Hulk * 50",
        "Learn * Hulk * Thunderclap",
        "Use Power * Hulk * Thunderclap * 70",
        "Evil Defeated!"
    ])
);

console.log("*".repeat(60));

solve( ([
        "2",
        "Iron Man-Repulsor Beams,Flight-20",
        "Thor-Lightning Strike,Hammer Throw-100",
        "Train * Thor * 20",
        "Use Power * Iron Man * Repulsor Beams * 30",
        "Evil Defeated!"
    ])
);

console.log("*".repeat(60));

solve( ([
        "2",
        "Iron Man-Repulsor Beams,Flight-100",
        "Thor-Lightning Strike,Hammer Throw-50",
        "Train * Thor * 20",
        "Learn * Thor * Hammer Throw",
        "Use Power * Iron Man * Repulsor Beams * 30",
        "Evil Defeated!"
    ])
);