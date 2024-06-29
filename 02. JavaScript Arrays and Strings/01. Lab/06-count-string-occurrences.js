function solve(string, searchedWord) {
    let words = string.split(" ");
    let counter = 0;

    for (let currentWord of words) {
        if (currentWord === searchedWord) {
            counter++;
        }
    }
    console.log(counter);
}

solve("This is a word and it also is a sentence", "is"); // 2
solve("softuni is great place for learning new programming languages", "softuni"); // 1