function calculatePrice(typeOfFruit, weight, price) {
    let gramsToKG = weight / 1000;
    let sum = gramsToKG * price;
    console.log(`I need $${sum.toFixed(2)} to buy ${gramsToKG.toFixed(2)} kilograms ${typeOfFruit}.`);
}
