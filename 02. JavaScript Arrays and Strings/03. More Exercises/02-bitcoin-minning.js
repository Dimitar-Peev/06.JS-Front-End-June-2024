function bitcoinMining(shift) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let totalMoney = 0;
    let bitcoins = 0;
    let firstBitcoinDay = 0;

    for (let day = 1; day <= shift.length; day++) {
        let goldMined = shift[day - 1];

        if (day % 3 === 0) {
            goldMined *= 0.7;
        }

        totalMoney += goldMined * goldPrice;

        while (totalMoney >= bitcoinPrice) {
            if (bitcoins === 0) {
                firstBitcoinDay = day;
            }
            bitcoins++;
            totalMoney -= bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
// Bought bitcoins: 2
// Day of the first purchased bitcoin: 2
// Left money: 10531.78 lv.

bitcoinMining([50, 100]);
// Bought bitcoins: 0
// Money left: 10126.50 lv.

bitcoinMining([3124.15, 504.212, 2511.124]);
// Bought bitcoins: 30
// Day of the first purchased bitcoin: 1
// Money left: 5144.11 lv.
