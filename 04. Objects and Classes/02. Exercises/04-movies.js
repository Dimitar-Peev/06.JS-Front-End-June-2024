function printMovieInfo(array) {
    let movies = [];

    array.forEach((element) => {
        if (element.includes("addMovie")) {
            let movie = element.split("addMovie ")[1];
            movies.push({name: movie}); // property: name, value: movie
        } else if (element.includes("directedBy")) {
            let [movie, director] = element.split(" directedBy ");

            let searching = movies.find((m) => m.name === movie);

            if (searching) {
                searching["director"] = director;
            }
        } else if (element.includes("onDate")) {
            let [movie, date] = element.split(" onDate ");

            let searching = movies.find((e) => e.name === movie);

            if (searching) {
                searching["date"] = date;
            }
        }
    });

    movies.forEach((movie) => {
        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
    });
}

printMovieInfo([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
]);
// {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
// {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}

printMovieInfo([
    "addMovie The Avengers",
    "addMovie Superman",
    "The Avengers directedBy Anthony Russo",
    "The Avengers onDate 30.07.2010",
    "Captain America onDate 30.07.2010",
    "Captain America directedBy Joe Russo",
]);
// {"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"}
