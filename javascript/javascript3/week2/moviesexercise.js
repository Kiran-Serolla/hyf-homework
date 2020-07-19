// Filtering bad movies with rating lessthan 5
fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((movies) => {
    const badMovies = movies
      .filter((movie) => movie.rating <= 5)
      .map((movie) => movie);
    console.log(badMovies);
  });

// Bad movies since 2000

fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((movies) => {
    const badMoviesSince2000 = movies
      .filter((movie) => movie.rating <= 5 && movie.year > 2000)
      .map((movie) => movie);
    console.log(badMoviesSince2000);
  });
