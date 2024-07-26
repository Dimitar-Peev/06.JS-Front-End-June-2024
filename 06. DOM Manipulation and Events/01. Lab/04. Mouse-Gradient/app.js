function attachGradientEvents() {
    const gradient = document.getElementById("gradient");
    const resultElement = document.getElementById("result");

    gradient.addEventListener("mousemove", gradientMove);
    gradient.addEventListener("mouseout", gradientOut);

    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById("result").textContent = power + "%";
        resultElement.textContent = power + "%";
    }

    function gradientOut(event) {
        document.getElementById("result").textContent = "";
    }
}