function solve(string) {
    let extractedWords = string.toUpperCase().match(/\w+/g);

    if (extractedWords !== null) {
        console.log(extractedWords.join(", "));
    }
}

solve("Hi, how are you?"); // HI, HOW, ARE, YOU
solve("hello"); // HELLO