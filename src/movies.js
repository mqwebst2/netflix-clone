const apikey = import.meta.env.VITE_API_KEY;

export async function getMoviesSearch(movieTitle) {
  if (movieTitle !== null) {
    let urlTitle = movieTitle.replaceAll(' ', '+');
    fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${urlTitle}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.Search);
        return data.Search;
      });
  }
}

export async function getMovieDetails(movieImdbID, callbackSetter) {
  if (movieImdbID !== null) {
    fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${movieImdbID}`)
      .then((resp) => resp.json())
      .then((data) => callbackSetter(data));
  }
}
