function printAndSum(start, end) {
    let text = '';
    let sum = 0;
    for (let i = start; i <= end; i++) {
        text += i + " ";
        sum += i;
    }
    console.log(text.trim());
    console.log(`Sum: ${sum}`);
}
