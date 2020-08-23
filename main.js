'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt("How many films did you watch?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("How many films did you watch?", "");
    }
}

start();


// MAIN OBJECT

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// ===========

function remberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Your favorite film", ""),
              b = prompt("Rate it", "");
    
        if (a != '' && b != '' && a != null && b != null && a.length < 50) {
            console.log('done');
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        } 
    }
}

remberMyFilms();
 
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('posmotreno dovolno malo filmov');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('vi klassicheskiy zritel');
    } else if (personalMovieDB.count >= 30) {
        console.log('vi kinoman');
    } else {
        console.log('proizoshlo oshibka');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre ${i}`, "");
    }
}

writeYourGenres();