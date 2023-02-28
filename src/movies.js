const apikey = import.meta.env.VITE_API_KEY;

export async function getMoviesSearch(movieTitle) {
  let urlTitle = movieTitle.replaceAll(' ', '+');
  fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${urlTitle}`)
    .then((resp) => resp.json())
    .then((data) => {
      return { data };
    });
}

export async function getMovieDetails() {}
