function horseRacing(inputArr) {
    const horses = inputArr.shift().split("|");

    let inputLine = inputArr.shift();

    while (inputLine !== "Finish") {
        const commandArray = inputLine.split(" ");
        const command = commandArray.shift();
        const horseName = commandArray.shift();

        const horsePosition = findHorsePos(horseName);

        switch (command) {
            case "Retake":
                const overtakenHorse = commandArray.shift();

                const secondHorsePosition = findHorsePos(overtakenHorse);
                if (horsePosition < secondHorsePosition) {
                    horses[horsePosition] = overtakenHorse;
                    horses[secondHorsePosition] = horseName;

                    console.log(`${horseName} retakes ${overtakenHorse}.`);
                }

                break;

            case "Trouble":
                if (horsePosition > 0) {
                    horses[horsePosition] = horses[horsePosition - 1];
                    horses[horsePosition - 1] = horseName;

                    console.log(`Trouble for ${horseName} - drops one position.`)
                }

                break;

            case "Rage":
                const horse = findHorsePos(horseName)
                horses.splice(horse, 1)
                horses.splice(horse + 2, 0, horseName)

                console.log(`${horseName} rages 2 positions ahead.`)
                break;

            case "Miracle":
                const lastHorse = horses.shift();
                horses.push(lastHorse);

                console.log(`What a miracle - ${lastHorse} becomes first.`)
                break;
        }

        inputLine = inputArr.shift();
    }

    console.log(horses.join("->"));
    console.log(`The winner is: ${horses.pop()}`)

    function findHorsePos (horse) {
        return horses.findIndex((x) => x === horse)
    }

}

horseRacing((['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish']));

horseRacing((['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish']));

horseRacing(['Fancy|Lilly',
    'Retake Lilly Fancy',
    'Trouble Lilly',
    'Trouble Lilly',
    'Finish',
    'Rage Lilly']);
