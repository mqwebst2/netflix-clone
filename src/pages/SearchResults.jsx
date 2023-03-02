import { useEffect } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { getMoviesSearch } from '../movies';
import Card from '../components/js/Card/Card';
const apikey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const {
    movies: [movies, setMovies],
    watchlist: [watchlist, setWatchlist],
  } = useOutletContext();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  let handleMovieSearch = (title) => {
    let urlTitle = title.replaceAll(' ', '+');
    fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${urlTitle}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };

  useEffect(() => {
    let searchDelay = setTimeout(() => {
      handleMovieSearch(query);
      console.log(movies);
    }, 400);
    return () => clearTimeout(searchDelay);
  }, [query]);

  let movieCards = movies.map((movie) => {
    return (
      <Card
        key={movie.imdbID}
        {...movie}
        // handleWatchlist={() => handleWatchlist(movie)}
        // checkWatchlist={() => checkWatchlist(movie)}
      />
    );
  });

  return (
    <div id='Search Results'>
      <h2 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: '300' }}>
        Search Results
      </h2>

      <div className='searchResult'>
        {movies.length ? (
          movieCards
        ) : (
          <span>Search for a movie or show you want to watch!</span>
        )}
      </div>
    </div>
  );
}
