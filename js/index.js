// const storeName = 'sexshop';
// const storeDescription = {
//     budget : 10000,
//     employees : ['alex', 'ivan', 'john'],
//     products : {
//         'pensil' : 22,
//         'lamp' : 11
//     },
//     open : true
    
// }
// console.log(storeDescription.products);


const numberofFilms = +prompt('сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов?', ''),
      b = prompt('на сколько оцените его?', ''),
      c = prompt('один из последних просмотренных фильмов?', ''),
      d = prompt('на сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);