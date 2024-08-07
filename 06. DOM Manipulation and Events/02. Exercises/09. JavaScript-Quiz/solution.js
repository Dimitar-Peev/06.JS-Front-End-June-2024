function solve() {
    const sections = Array.from(document.querySelectorAll("#quizzie section"));
    const result = document.querySelector("#results h1");

    const answers = [
        "onclick",
        "JSON.stringify()",
        "A programming API for HTML and XML documents",
    ];

    let score = 0;
    let questionsCount = 0;

    for (let section of sections) {
        section.addEventListener("click", onClick);
    }

    function onClick(element) {
        const curSection = element.currentTarget;
        const nextSection = curSection.nextElementSibling;

        const buttons = curSection.querySelectorAll("p");
        const [firstBtn, secondBtn] = buttons;

        if (element.target === firstBtn || element.target === secondBtn) {
            nextSection.style.display = "block";
            curSection.style.display = "none";
            const answer = element.target.textContent;
            if (answers.includes(answer)) {
                score++;
            }
            questionsCount++;
            if (questionsCount === 3) {
                if (score === 3) {
                    result.textContent = "You are recognized as top JavaScript fan!";
                } else {
                    result.textContent = `You have ${score} right answers`;
                }
            }
        }
    }
}
