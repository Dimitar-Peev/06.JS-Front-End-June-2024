function getMeetingsInfo(array) {
    const meetings = {};

    for (const element of array) {
        const [day, name] = element.split(" ");

        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }

    }

    Object.keys(meetings).forEach((day) => {
        console.log(`${day} -> ${meetings[day]}`);
    });
}

getMeetingsInfo([
    "Monday Peter",
    "Wednesday Bill",
    "Monday Tim",
    "Friday Tim",
]);
// Scheduled for Monday
// Scheduled for Wednesday
// Conflict on Monday!
// Scheduled for Friday
// Monday -> Peter
// Wednesday -> Bill
// Friday -> Tim

getMeetingsInfo([
    "Friday Bob",
    "Saturday Ted",
    "Monday Bill",
    "Monday John",
    "Wednesday George",
 ]);
// Scheduled for Friday
// Scheduled for Saturday
// Scheduled for Monday
// Conflict on Monday!
// Scheduled for Wednesday
// Friday -> Bob
// Saturday -> Ted
// Monday -> Bill
// Wednesday -> George
