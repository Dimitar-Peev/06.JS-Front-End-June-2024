function spellbook(inputArr) {
    let mysteriousSpell = inputArr.shift();

    let inputLine = inputArr.shift();
    while (inputLine !== "End") {
        const commandArray = inputLine.split("!");
        const command = commandArray.shift();

        switch (command) {
            case "RemoveEven":
                // let newWord = mysteriousSpell.split("");
                // let newString = "";
                //
                // for (let i = 0; i < newWord.length; i++) {
                //     if (i % 2 === 0) {
                //         let char = newWord[i];
                //         newString += char;
                //     }
                // }
                //
                // mysteriousSpell = newString;
                // console.log(mysteriousSpell);

                const [even, _] = [...mysteriousSpell].reduce((r, char, i) => (r [i % 2].push(char), r), [[], []]);
                mysteriousSpell = even.join("");
                console.log(mysteriousSpell);

                break;
            case "TakePart":
                const fromIndex = parseInt(commandArray.shift());
                const toIndex = parseInt(commandArray.shift());
                mysteriousSpell = mysteriousSpell.slice(fromIndex, toIndex);
                console.log(mysteriousSpell);
                break;
            case "Reverse":
                const substring = commandArray.shift();
                if (mysteriousSpell.includes(substring)) {
                    mysteriousSpell = mysteriousSpell.replace(substring, "");
                    // mysteriousSpell += substring.split("").reverse().join("");
                    mysteriousSpell += reverseString(substring);
                    console.log(mysteriousSpell);
                } else {
                    console.log("Error");
                }
                break;
        }

        inputLine = inputArr.shift();
    }

    console.log(`The concealed spell is: ${mysteriousSpell}`)

    function reverseString(str) {
        return (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0);
    }
}

spellbook(["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"]);

spellbook(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"]);