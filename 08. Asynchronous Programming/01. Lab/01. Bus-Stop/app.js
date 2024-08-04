function getInfo() {
    const baseUrl = "http://localhost:3030/jsonstore/bus/businfo";

    const stopIdElement = document.getElementById("stopId");
    const stopNameElement = document.getElementById("stopName");
    const busesListElement = document.getElementById("buses");

    stopNameElement.textContent = "";
    busesListElement.innerHTML = "";

    fetch(`${baseUrl}/${stopIdElement.value}`)
        .then((response) => response.json())
        .then((busInfo) => {
            const {name, buses} = busInfo;
            stopNameElement.textContent = name;

            for (const busId in buses) {
                const liElement = document.createElement("li");
                liElement.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`;
                busesListElement.appendChild(liElement);
            }
        })
        .catch(() => (stopNameElement.textContent = "Error"));
}
