function printListType(input) {
	class Song {
		constructor(type, name, time) {
			this.type = type;
			this.name = name;
			this.time = time;
		}
	}

	let songs = [];
	let numberOfSongs = input.shift();
	let typeSong = input.pop();

	for (let i = 0; i < numberOfSongs; i++) {
		let [type, name, time] = input[i].split("_");
		let song = new Song(type, name, time);
		songs.push(song);
	}

	if (typeSong === "all") {
		songs.forEach((i) => console.log(i.name));
	} else {
		let filtered = songs.filter((e) => e.type === typeSong);
		filtered.forEach((s) => console.log(s.name));
	}
}

printListType([
	3,
	"favourite_DownTown_3:14",
	"favourite_Kiss_4:16",
	"favourite_Smooth Criminal_4:01",
	"favourite",
]);
// DownTown
// Kiss
// Smooth Criminal

printListType([
	4,
	"favourite_DownTown_3:14",
	"listenLater_Andalouse_3:24",
	"favourite_In To The Night_3:58",
	"favourite_Live It Up_3:48",
	"listenLater",
]);
// Andalouse

printListType([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
// Replay
// Photoshop
