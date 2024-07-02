function pascalCaseSplitter(string) {
	let regex = /[A-Z][a-z]*/g;
	let wordsArray = string.match(regex);
	let resultString = wordsArray.join(", ");
	console.log(resultString);
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan"); // Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
pascalCaseSplitter("HoldTheDoor"); // Hold, The, Door
pascalCaseSplitter("ThisIsSoAnnoyingToDo"); // This, Is, So, Annoying, To, Do
