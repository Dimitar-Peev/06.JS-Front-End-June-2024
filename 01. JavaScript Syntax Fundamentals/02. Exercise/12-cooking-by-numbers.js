function calculation(num, op1, op2, op3, op4, op5) {
    let result = Number(num);
    let operations = [op1, op2, op3, op4, op5];

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "chop":
                result = result / 2;
                break;
            case "dice":
                result = Math.sqrt(result);
                break;
            case "spice":
                result = result + 1;
                break;
            case "bake":
                result = result * 3;
                break;
            case "fillet":
                result = (result * 0.8).toFixed(1);
                break;
            default:
                console.log("Error!");
        }
        console.log(result);
    }
}
