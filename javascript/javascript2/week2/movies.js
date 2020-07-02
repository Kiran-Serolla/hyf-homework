/* const movies = [
  { title: "'71", year: 2014, rating: 7.2, votes: 41702, running_times: 5940 },

  {
    title: "'A' gai wak",
    year: 1983,
    rating: 7.4,
    votes: 11942,
    running_times: 6300,
  },
  {
    title: "'Breaker' Morant",
    year: 1980,
    rating: 7.9,
    votes: 10702,
    running_times: 6420,
  },
  {
    title: "'Crocodile' Dundee II",
    year: 1988,
    rating: 5.5,
    votes: 47180,
    running_times: 6480,
  },
  {
    title: "(500) Days of Summer",
    year: 2009,
    rating: 7.7,
    votes: 412368,
    running_times: 5700,
  },
  {
    title: "*batteries not included",
    year: 1987,
    rating: 6.6,
    votes: 25636,
    running_times: 6360,
  },
  {
    title: "...E tu vivrai nel terrore! L'aldilà",
    year: 1981,
    rating: 6.9,
    votes: 16484,
    running_times: 5220,
  },
  {
    title: "...and justice for all.",
    year: 1979,
    rating: 7.4,
    votes: 25408,
    running_times: 7140,
  },
  { title: "10", year: 1979, rating: 6, votes: 13152, running_times: 7320 },
  {
    title: "10 Cloverfield Lane",
    year: 2016,
    rating: 7.2,
    votes: 216151,
    running_times: 6240,
  },
  {
    title: "10 Items or Less",
    year: 2006,
    rating: 6.7,
    votes: 13342,
    running_times: 4920,
  },
  {
    title: "10 Things I Hate About You",
    year: 1999,
    rating: 7.2,
    votes: 247070,
    running_times: 5820,
  },
  {
    title: "10 Years",
    year: 2011,
    rating: 6.1,
    votes: 20790,
    running_times: 6000,
  },
  {
    title: "10,000 BC",
    year: 2008,
    rating: 5.1,
    votes: 114750,
    running_times: 6540,
  },
  {
    title: "100 Feet",
    year: 2008,
    rating: 5.5,
    votes: 10979,
    running_times: 6240,
  },
  {
    title: "100 Girls",
    year: 2000,
    rating: 5.9,
    votes: 19232,
    running_times: 5640,
  },
  {
    title: "101 Dalmatians",
    year: 1996,
    rating: 5.7,
    votes: 83245,
    running_times: 6180,
  },
  {
    title: "102 Dalmatians",
    year: 2000,
    rating: 4.9,
    votes: 28927,
    running_times: 6000,
  },
  {
    title: "11-11-11",
    year: 2011,
    rating: 4,
    votes: 11425,
    running_times: 5400,
  },
  {
    title: "11:14",
    year: 2003,
    rating: 7.2,
    votes: 40149,
    running_times: 5700,
  },
  {
    title: "12 Angry Men",
    year: 1957,
    rating: 8.9,
    votes: 518449,
    running_times: 5760,
  },
  {
    title: "12 Rounds",
    year: 2009,
    rating: 5.6,
    votes: 24457,
    running_times: 6480,
  },
  {
    title: "12 Years a Slave",
    year: 2013,
    rating: 8.1,
    votes: 513047,
    running_times: 8040,
  },
  {
    title: "127 Hours",
    year: 2010,
    rating: 7.6,
    votes: 302809,
    running_times: 5640,
  },
]; */
// movies with short title
const shortTitle = movies.filter((name) => name.title.length < 7);
//console.log("movies with short title : \n", shortTitle);

// movies with long titles

const longTitle = movies.filter((name) => name.title.length > 15);
//console.log("movies with long title : \n", longTitle);

// movies made betweem 1980 and 1989

const movieCount = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
console.log(movieCount.length);

// Calculating rating

const ratingTag = movies.map((ratingValue) => {
  if (ratingValue.rating >= 7) {
    ratingValue.tag = "Good";
  } else if (ratingValue.rating >= 4 && ratingValue.rating < 7) {
    ratingValue.tag = "Average";
  } else if (ratingValue.rating < 4) {
    ratingValue.tag = "Bad";
  }
  return;
});
//console.log(movies);

const moviesRating = movies
  .filter((higherRating) => higherRating.rating > 6)
  .map((higherRating) => higherRating.rating);
console.log(ratingArray);
console.log(movies[0]);
const eightiesMovies = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
console.log(eightiesMovies);
