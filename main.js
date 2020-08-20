const numberOfFilms = +prompt("How many films did you watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt("Your favorite film", ""),
      b = prompt("Rate it", ""),
      c = prompt("Your favorite film", ""),
      d = prompt("Rate it", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);