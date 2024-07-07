function getPhoneBook(array) {
	let phoneBook = {};

	for (let element of array) {
		const [name, phone] = element.split(" ");
		phoneBook[name] = phone;
	}

	for (let key in phoneBook) {
		console.log(`${key} -> ${phoneBook[key]}`);
	}

	// console.log(phoneBook.hasOwnProperty("Tim"));
}

getPhoneBook([
	"Tim 0834212554",
	"Peter 0877547887",
	"Bill 0896543112",
	"Tim 0876566344",
]);
// Tim -> 0876566344
// Peter -> 0877547887
// Bill -> 0896543112
getPhoneBook([
	"George 0552554",
	"Peter 087587",
	"George 0453112",
	"Bill 0845344",
]);
// George -> 0453112
// Peter -> 087587
// Bill -> 0845344
