import { useEffect } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import Card from '../components/js/Card/Card';
const apikey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const {
    movies: [movies, setMovies],
  } = useOutletContext();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  let handleMovieSearch = async (title) => {
    let urlTitle = title.replaceAll(' ', '+');
    await fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${urlTitle}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setMovies(null);
    let searchDelay = setTimeout(() => {
      handleMovieSearch(query);
    }, 400);
    return () => clearTimeout(searchDelay);
  }, [query]);

  let movieCards =
    movies &&
    movies.map((movie) => {
      console.log(movie);
      return <Card key={movie.imdbID} imdbID={movie.imdbID} />;
    });

  return (
    <div id='Search Results'>
      <h2 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: '300' }}>
        Search Results
      </h2>

      <div className='searchResult'>
        {movies ? (
          movieCards
        ) : (
          <span>Search for a movie or show you want to watch!</span>
        )}
      </div>
    </div>
  );
}
