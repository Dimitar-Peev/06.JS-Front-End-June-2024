function wildAdventure(inputArr) {
    let n = Number(inputArr.shift());
    const heroesMap = {};

    while (n-- > 0) {
        const heroInfo = inputArr.shift();
        const [name, HP, bullets] = heroInfo.split(" ");
        heroesMap[name] = {
            hp: Number(HP),
            bullets: Number(bullets)
        };
    }

    let inputLine = inputArr.shift();
    while (inputLine !== "Ride Off Into Sunset") {
        const commandArray = inputLine.split(" - ");
        const command = commandArray.shift();
        const characterName = commandArray.shift();

        switch (command) {
            case "FireShot":
                const target = commandArray.shift();

                if (heroesMap[characterName].bullets > 0) {
                    heroesMap[characterName].bullets -= 1;
                    console.log(`${characterName} has successfully hit ${target} and now has ${heroesMap[characterName].bullets} bullets!`)
                } else {
                    console.log(`${characterName} doesn't have enough bullets to shoot at ${target}!`)
                }
                break;
            case "TakeHit":
                const damage = Number(commandArray.shift());
                const attacker = commandArray.shift();

                heroesMap[characterName].hp -= damage;
                const currentHP = heroesMap[characterName].hp;
                if (currentHP > 0) {
                    console.log(`${characterName} took a hit for ${damage} HP from ${attacker} and now has ${currentHP} HP!`)
                } else {
                    console.log(`${characterName} was gunned down by ${attacker}!`)
                    delete heroesMap[characterName];
                }

                break;
            case "Reload":
                if (heroesMap[characterName].bullets === 6) {
                    console.log(`${characterName}'s pistol is fully loaded!`)
                } else if (heroesMap[characterName].bullets < 6){
                    const bulletsReloaded = 6 - heroesMap[characterName].bullets;
                    heroesMap[characterName].bullets = 6;
                    console.log(`${characterName} reloaded ${bulletsReloaded} bullets!`);
                }
                break;
            case "PatchUp":
                const amount = Number(commandArray.shift());

                if (heroesMap[characterName].hp === 100) {
                    console.log(`${characterName} is in full health!`)
                } else if (heroesMap[characterName].hp < 100){
                    heroesMap[characterName].hp = Math.min(100, heroesMap[characterName].hp + amount);
                    console.log(`${characterName} patched up and recovered ${amount} HP!`);
                }
                break;
        }

        inputLine = inputArr.shift();
    }

    for (const heroesKey in heroesMap) {
        console.log(heroesKey);
        console.log(`  HP: ${heroesMap[heroesKey].hp}`);
        console.log(`  Bullets: ${heroesMap[heroesKey].bullets}`);
    }

}

wildAdventure(["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"]);

wildAdventure(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"]);

wildAdventure(["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"]);

