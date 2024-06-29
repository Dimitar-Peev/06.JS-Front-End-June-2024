function reverse(n, inputArr) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(inputArr[i]);
    }

    let output = "";
    for (let j = arr.length - 1; j >= 0; j--) {
        output += inputArr[j] + " ";
    }

    console.log(output);
}

reverse(3, [10, 20, 30, 40, 50]); // 30 20 10
reverse(4, [-1, 20, 99, 5]); // 5 99 20 -1
reverse(2, [66, 43, 75, 89, 47]); // 43 66