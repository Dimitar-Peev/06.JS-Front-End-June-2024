function sortingNumbers(array) {
    array.sort((a, b) => {
        return a - b;
    })

    let sortedArray = [];

    while (array.length !== 0) {
        sortedArray.push(array.shift());
        sortedArray.push(array.pop());
    }
    return sortedArray;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); // [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]