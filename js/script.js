"use strict";




let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Cколько фильмов смотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Cколько фильмов смотрели?", '');
    }
}

start();


const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a;
let b;

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    } 
}

function writeYourGenres() {
    for (let i =0;i<=2;i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимы жанр под номером ${i}`);
    }
}

function rememberMyFilms() {
    for(let i =0;i<2;i++) {
        a = prompt("Последний фильм?");
        b = prompt("Оцените этот фильм");
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Просмотрено нормально фильмов");
    } else if (personalMovieDB.count >= 30) {
        console.log("Просмотрено много фильмов");
    } else {
        console.log("Ошибка");
    }
}

detectPersonalLevel();

console.log(personalMovieDB);
