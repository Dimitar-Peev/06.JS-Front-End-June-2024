function colorize() {
    // let rows = document.querySelectorAll("table tr");
    // console.log(rows);
    // let index = 0;
    // for (let row of rows) {
    //     index++;
    //     if (index % 2 === 0) {
    //         row.style.background = "teal";
    //     }
    // }

    const rows = document.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        if (i % 2 !== 0) {
            rows[i].style.background = "teal";
        }
    }
}