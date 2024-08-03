function loadRepos() {
    const baseURL = "https://api.github.com/users/testnakov/repos";
    const divElement = document.getElementById("res");

    fetch(baseURL, {
        method: "GET"
    })
        .then((response) => response.text())
        .then((data) => {
            divElement.textContent = data;
        });
}