function loadCommits() {
    // TODO: Try it with Fetch API
    const baseURL = "https://api.github.com/repos/";
    const username = document.getElementById("username");
    const repo = document.getElementById("repo");
    const commits = document.getElementById("commits");

    commits.innerHTML = "";

    fetch(baseURL + username.value + "/" + repo.value + "/commits")
        .then((res) => res.json())
        .then((data) => print(data))
        .catch(err => {
                const li = document.createElement("li");
                li.textContent = "Error: 404 (Not Found)";
                commits.appendChild(li);
        });
        
    function print(data) {
        const fragment = document.createDocumentFragment(); 
        data.forEach(({commit}) => {
            const li = document.createElement("li");
            li.textContent = `${commit.author.name}: ${commit.message}`;
            fragment.appendChild(li);
        });
        commits.appendChild(fragment)
        return commits;
    }
}
