function login(string) {
	const username = string[0];
	const password = username.split("").reverse().join("");

	for (let i = 1; i < string.length; i++) {
		if (string[i] === password) {
			console.log(`User ${username} logged in.`);
			break;
		} else {
			if (i === 4) {
				console.log(`User ${username} blocked!`);
				break;
			} else {
				console.log("Incorrect password. Try again.");
			}
		}
	}
}

login(["Acer", "login", "go", "let me in", "recA"]);
// Incorrect password. Try again.
// Incorrect password. Try again.
// Incorrect password. Try again.
// User Acer logged in.

login(["momo", "omom"]); // User momo logged in.

login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
// Incorrect password. Try again.
// Incorrect password. Try again.
// Incorrect password. Try again.
// User sunny blocked!
