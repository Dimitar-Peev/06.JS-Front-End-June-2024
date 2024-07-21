function solve() {

    let text = document.querySelector("#text").value.toLowerCase();
    let convention = document.querySelector("#naming-convention").value;
    let result = document.querySelector("#result");

    const isValid = convention === "Camel Case" || convention === "Pascal Case";
    let start = 1;
    let sentence = [];
    text = text.split(" ");

    if (convention === "Camel Case") {
        sentence.push(text[0]);
        start = 1;
    } else if (convention === "Pascal Case") {
        start = 0;
    }

    for (let i = start; i < text.length; i++) {
        sentence.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
    }
    result.textContent = sentence.join("");

    if (!isValid) {
        result.textContent = "Error!";
    }
}