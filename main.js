'use strict';


// MAIN OBJECT

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt("How many films did you watch?", "");

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("How many films did you watch?", "");
        }
    },
    remberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('posmotreno dovolno malo filmov');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('vi klassicheskiy zritel');
        } else if (personalMovieDB.count >= 30) {
            console.log('vi kinoman');
        } else {
            console.log('proizoshlo oshibka');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Your favorite genre ${i}`, "");

            if (genre == null || genre == "") {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
    
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite film number #${i+1} - the ${item}`);
        });
    }
};

// ===========