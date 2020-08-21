'use strict';

const numberOfFilms = prompt("How many films did you watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

// let i = 0;
// while (i < 2) {
//    i++; 
//    const a = prompt("Your favorite film", ""),
//           b = prompt("Rate it", "");

//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//         console.log('done');
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log('error');
//         i--;
//     }  
// }

// let i = 0;
// do {
//     i++;
//     const a = prompt("Your favorite film", ""),
//           b = prompt("Rate it", "");

//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//         console.log('done');
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log('error');
//         i--;
//     } 
// } while (i < 2);
 
if (personalMovieDB.count < 10) {
    console.log('posmotreno dovolno malo filmov');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('vi klassicheskiy zritel');
} else if (personalMovieDB.count >= 30) {
    console.log('vi kinoman');
} else {
    console.log('proizoshlo oshibka');
}

console.log(personalMovieDB);