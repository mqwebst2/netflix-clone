import React, { useState } from 'react';
import './App.css';
import Header from './components/js/Header';
import Card from './components/js/Card/Card';

const apikey = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  let handleMovieSearch = (event, title) => {
    event.preventDefault();
    let urlTitle = title.replaceAll(' ', '+');
    fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${urlTitle}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };

  let addToWatchlist = (item) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, item]);
    console.log('add', watchlist);
  };

  let delFromWatchlist = (item) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => item.imdbID !== movie.imdbID)
    );
    console.log('del', watchlist);
  };

  let checkWatchlist = (item) =>
    watchlist.find((movie) => item.imdbID === movie.imdbID);

  let handleWatchlist = (movie) => {
    console.log(checkWatchlist(movie));
    if (checkWatchlist(movie) === undefined) {
      addToWatchlist(movie);
      return true;
    } else {
      delFromWatchlist(movie);
      return false;
    }
  };

  let movieCards = movies.map((movie) => {
    return (
      <Card
        key={movie.imdbID}
        {...movie}
        handleWatchlist={() => handleWatchlist(movie)}
        checkWatchlist={() => checkWatchlist(movie)}
      />
    );
  });

  return (
    <div className='App'>
      <Header onSubmit={handleMovieSearch} />
      <div className='main'>
        <div className='searchResult'>
          {movies.length ? (
            movieCards
          ) : (
            <span>Search for a movie or show you want to watch!</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
