"use strict";
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

{
	let result = 50;
	console.log(result);
}

// Практика 1
const numberOffFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOffFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
	b = prompt("На сколько оцените его?", ""),
	c = +prompt("Сколько фильмов вы уже посмотрели?", ""),
	d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);