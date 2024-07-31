function create(words) {
    let mainDiv = document.getElementById("content");

    for (const word of words) {
        let div = document.createElement("div");
        let paragraph = document.createElement("p");

        paragraph.textContent = word;
        paragraph.style.display = "none";

        div.append(paragraph);
        mainDiv.append(div);

        div.addEventListener("click", () => paragraph.style.display = "");
    }
}