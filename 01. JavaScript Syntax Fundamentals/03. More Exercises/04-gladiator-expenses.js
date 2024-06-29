function solve(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmet = parseInt(lostFightCount / 2);
    let sword = parseInt(lostFightCount / 3);
    let shield = parseInt(lostFightCount / 6);
    let armor = parseInt(lostFightCount / 12);

    let totalPrice = (helmet * helmetPrice) + (sword * swordPrice) + (shield * shieldPrice) + (armor * armorPrice);

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)
}

solve(7, 2, 3, 4, 5); // Gladiator expenses: 16.00 aureus
solve(23, 12.50, 21.50, 40, 200); // Gladiator expenses: 608.00 aureus