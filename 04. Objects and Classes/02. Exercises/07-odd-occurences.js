function extractOddWords(sentence) {
    sentence = sentence.toLowerCase();
    let arrayOfElements = sentence.split(" ");

    let map = new Map();

    arrayOfElements.forEach((element) => {
        if (map.has(element)) {
            let oldValue = map.get(element);
            let newValue = oldValue + 1;

            map.set(element, newValue);
        } else {
            map.set(element, 1);
        }
    });

    let oddWords = [];

    map.forEach((value, key) => {
        if (value % 2 !== 0) {
            oddWords.push(key);
        }
    });

    console.log(oddWords.join(" "));
}

extractOddWords("Java C# Php PHP Java PhP 3 C# 3 1 5 C#"); // c# php 1 5
extractOddWords("Cake IS SWEET is Soft CAKE sweet Food"); // soft food
