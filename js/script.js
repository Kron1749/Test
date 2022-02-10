"use strict";


let numberOfFilms = +prompt("Cколько фильмов смотрели?", '');


const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a;
let b;
for(let i =0;i<2;i++) {
    a = prompt("Последний фильм?");
    b = prompt("Оцените этот фильм");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Просмотрено нормально фильмов");
} else if (personalMovieDB.count >= 30) {
    console.log("Просмотрено много фильмов");
} else {
    console.log("Ошибка");
}


console.log(personalMovieDB);
