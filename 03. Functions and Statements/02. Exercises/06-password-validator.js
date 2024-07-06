function isValid(password) {
    function isValidLength(text) {
        return text.length >= 6 && text.length <= 10;
    }

    function isAlphanumeric(text) {
        let regex = /^[A-Za-z0-9]+$/gm;
        return regex.test(text);
    }

    function checkDigits(text) {
        const digits = password.replace(/\D/g, "").length;
        // let digits = 0;
        //
        // for (const digit of text) {
        //     if (!isNaN(digit)) {
        //         digits++;
        //     }
        // }

        return digits >= 2;
    }

    let validLength = isValidLength(password);
    let validNumeric = isAlphanumeric(password);
    let validDigitsCount = checkDigits(password);

    if (!validLength) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!validNumeric) {
        console.log("Password must consist only of letters and digits");
    }
    if (!validDigitsCount) {
        console.log("Password must have at least 2 digits");
    }

    if (validLength && validNumeric && validDigitsCount) {
        console.log("Password is valid");
    }
}

isValid("logIn");
// Password must be between 6 and 10 characters
// Password must have at least 2 digits
isValid("MyPass123");
// Password is valid
isValid("Pa$s$s");
// Password must consist only of letters and digits
// Password must have at least 2 digits
