"use strict";

const numberOfFilms = +prompt("Cколько фильмов смотрели?", '');

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const yourLastFilm = prompt("Последний фильм?");
const ratingOfYourLastFilm = prompt("Оцените этот фильм");

personalMovieDB.movies[yourLastFilm] = ratingOfYourLastFilm;

console.log(personalMovieDB);
