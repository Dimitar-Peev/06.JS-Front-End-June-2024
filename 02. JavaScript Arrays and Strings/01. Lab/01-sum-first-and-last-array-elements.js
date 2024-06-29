function sumFirstLast(numsAsString) {
    let first = [...numsAsString].shift();
    let last = [...numsAsString].pop();

    const sum = Number(first) + Number(last);
    console.log(sum)
}

sumFirstLast([20, 30, 40]); // 60
sumFirstLast([10, 17, 22, 33]); // 43
sumFirstLast([11, 58, 69]); // 80