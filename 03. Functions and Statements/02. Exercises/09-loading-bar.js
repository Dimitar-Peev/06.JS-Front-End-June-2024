function loadingBar(number) {
	if (number === 100) {
		console.log("100% Complete!");
		console.log("[%%%%%%%%%%]");
	} else {
		let step = number / 10;
		let percent = "%".repeat(step);
		let points = ".".repeat(10 - step);
		console.log(`${number}% [${percent}${points}]`);
		console.log("Still loading...");
	}
}

loadingBar(30);
// 30% [%%%.......]
// Still loading...

loadingBar(50);
// 50% [%%%%%.....]
// Still loading...

loadingBar(100);
// 100% Complete!
// [%%%%%%%%%%]
