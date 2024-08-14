((input) => {
    const [mysteriousSpell, ...commands] = input;

    const spell = commands.reduce((currentSpell, currentCommand) => {

        if (currentCommand === "RemoveEven") {
            const result = currentSpell
                .split("")
                .filter((_, index) => index % 2 === 0)
                .join("");
            console.log(result);
            return result;
        }

        if (currentCommand.startsWith("TakePart!")) {
            const [, from, to] = currentCommand.split("!");
            const result = currentSpell.slice(Number(from), Number(to));
            console.log(result);
            return result;
        }

        if (currentCommand.startsWith("Reverse!")) {
            const [, substring] = currentCommand.split("!");

            if (!currentSpell.includes(substring)) {
                console.log("Error");
                return currentSpell;
            }

            const reversedValue = substring.split("").reverse().join("");
            const result = currentSpell.replace(substring, "").concat(reversedValue);
            console.log(result);
            return result;
        }

        return currentSpell;

    }, mysteriousSpell);

    console.log("The concealed spell is:", spell);
})
(
    (["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
        "TakePart!31!42",
        "RemoveEven",
        "Reverse!anim",
        "Reverse!sad",
        "End"])
);