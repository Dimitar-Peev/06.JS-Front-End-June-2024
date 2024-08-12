async function attachEvents() {

    const baseURL = "http://localhost:3030/jsonstore/collections/students";
    const tableBody = document.querySelector("tbody");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", onLoad);

    // tableBody.innerHTML = "";

    const response = await fetch(baseURL);
    const studentsInfo = await response.json();

    //  Object.values(studentsInfo) - Връща масив който обхождаме
    Object.values(studentsInfo).forEach((student) => {
        rowCreator(student);
    });

    async function onLoad() {
        const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll("#form input");

        const isValidPostRequest = firstName.value !== "" && lastName.value !== "" && facultyNumber.value !== "" && grade.value !== "";

        if (isValidPostRequest) {

            const newStudentInfo = {
                firstName: firstName.value,
                lastName: lastName.value,
                facultyNumber: facultyNumber.value,
                grade: grade.value,
            }

            await fetch(baseURL, {
                method: "POST",
                body: JSON.stringify(newStudentInfo)
            });

            rowCreator(newStudentInfo);

            firstName.value = "";
            lastName.value = "";
            facultyNumber.value = "";
            grade.value = "";
        }
    }

    function rowCreator(student){
        const row = document.createElement("tr");
        row.innerHTML = `
        <tr>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facultyNumber}</td>
            <td>${student.grade}</td>
        </tr>
        `;

        tableBody.appendChild(row);
    }

}

attachEvents();