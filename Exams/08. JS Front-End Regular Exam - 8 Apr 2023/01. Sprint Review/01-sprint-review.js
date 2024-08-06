function sprintReview(inputArr) {
    let n = Number(inputArr.shift());
    const assigneesMap = {};

    while (n-- > 0) {
        const assigneeInfo = inputArr.shift();

        const [assignee, taskId, title, status, points] = assigneeInfo.split(":");

        if (!assigneesMap.hasOwnProperty(assignee)) {
            assigneesMap[assignee] = [];
        }

        assigneesMap[assignee].push({
            taskId,
            title,
            status,
            points: Number(points)
        });
    }

    // console.log(assigneesMap);

    // console.log(inputArr);

    while (inputArr.length > 0) {

        let commandArray = inputArr.shift().split(":");
        const command = commandArray.shift();
        const assignee = commandArray.shift();

        switch (command) {
            case "Add New":
                const taskId = commandArray.shift();
                const title = commandArray.shift();
                const status = commandArray.shift();
                const points = commandArray.shift();
                if (!assigneesMap.hasOwnProperty(assignee)) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else {
                    assigneesMap[assignee].push({taskId, title, status, points: Number(points)});
                }
                break;
            case "Change Status":
                const taskIdIndex = commandArray.shift();
                const newStatus = commandArray.shift();

                if (!assigneesMap.hasOwnProperty(assignee)) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else {
                    const foundTask = assigneesMap[assignee].find(x => x.taskId === taskIdIndex);
                    if (!foundTask) {
                        console.log(`Task with ID ${taskIdIndex} does not exist for ${assignee}!`);
                    } else {
                        foundTask.status = newStatus;
                    }
                }
                break;
            case "Remove Task":
                const index = commandArray.shift();

                if (!assigneesMap.hasOwnProperty(assignee)) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else if (index < 0 || index >= assigneesMap[assignee].length) {
                    console.log("Index is out of range!");
                } else {
                    assigneesMap[assignee].splice(index, 1);
                }
                break;
        }

    }

    const todoPoints = calculateTotalForStatus("ToDo");
    const inProgressPoints = calculateTotalForStatus("In Progress");
    const codeReviewPoints = calculateTotalForStatus("Code Review");
    const donePoints = calculateTotalForStatus("Done");

    console.log(`ToDo: ${todoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${codeReviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);

    if (donePoints >= todoPoints + inProgressPoints + codeReviewPoints) {
        console.log("Sprint was successful!")
    } else {
        console.log("Sprint was unsuccessful...");
    }

    function calculateTotalForStatus(status) {
        return Object.values(assigneesMap)
            .flat()
            .filter((t) => t.status === status)
            .reduce((acc, currentValue) => {
                return acc + currentValue.points;
            }, 0);
    }
}

sprintReview([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]);

console.log("-".repeat(50));

sprintReview([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]);