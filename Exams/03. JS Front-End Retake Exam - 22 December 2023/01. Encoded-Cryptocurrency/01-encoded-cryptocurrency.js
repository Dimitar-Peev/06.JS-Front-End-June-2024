function encodedCryptocurrency(inputArr) {
    let message = inputArr.shift();

    let inputLine = inputArr.shift();
    while (inputLine !== "Buy") {
        const commandArray = inputLine.split("?");
        const command = commandArray.shift();

        switch (command) {
            case "TakeEven":
                const [even, _] = [...message].reduce((r, char, i) => (r [i % 2].push(char), r), [[], []]);
                message = even.join("");
                console.log(message);
                break;
            case "ChangeAll":
                const substring1 = commandArray.shift();
                const replacement = commandArray.shift();
                // message = message.replaceAll(substring1, replacement)
                message = message.split(substring1).join(replacement);
                console.log(message);
                break;
            case "Reverse":
                const substring2 = commandArray.shift();
                if (message.includes(substring2)) {
                    message = message.replace(substring2, "");
                    // message += substring2.split("").reverse().join("");
                    message += reverseString(substring2);
                    console.log(message);
                } else {
                    console.log("error");
                }
                break;
        }

        inputLine = inputArr.shift();
    }

    console.log(`The cryptocurrency is: ${message}`)

    function reverseString(str) {
        return (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0);
    }
}

encodedCryptocurrency(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"]);

encodedCryptocurrency(["PZDfA2PkAsakhnefZ7aZ",
    "TakeEven",
    "TakeEven",
    "TakeEven",
    "ChangeAll?Z?X",
    "ChangeAll?A?R",
    "Reverse?PRX",
    "Buy"]);