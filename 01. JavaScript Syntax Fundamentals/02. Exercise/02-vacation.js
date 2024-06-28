function calculatePrice(groupOfPeople, groupType, dayOfWeek) {
    let totalPrice = 0;

    switch (dayOfWeek) {
        case "Friday":
            if (groupType === "Students") {
                totalPrice = groupOfPeople * 8.45;
                if (groupOfPeople >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            } else if (groupType === "Business") {
                if (groupOfPeople >= 100) {
                    groupOfPeople -= 10;
                }
                totalPrice = groupOfPeople * 10.90;
            } else if (groupType === "Regular") {
                totalPrice = groupOfPeople * 15;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;
        case "Saturday":
            if (groupType === "Students") {
                totalPrice = groupOfPeople * 9.80;
                if (groupOfPeople >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            } else if (groupType === "Business") {
                if (groupOfPeople >= 100) {
                    groupOfPeople -= 10;
                }
                totalPrice = groupOfPeople * 15.60;
            } else if (groupType === "Regular") {
                totalPrice = groupOfPeople * 20;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;
        case "Sunday":
            if (groupType === "Students") {
                totalPrice = groupOfPeople * 10.46;
                if (groupOfPeople >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            } else if (groupType === "Business") {
                if (groupOfPeople >= 100) {
                    groupOfPeople -= 10;
                }
                totalPrice = groupOfPeople * 16;
            } else if (groupType === "Regular") {
                totalPrice = groupOfPeople * 22.50;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
