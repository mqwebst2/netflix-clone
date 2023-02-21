import React, { useState } from 'react';
import './App.css';
import Header from './components/js/Header';
import Card from './components/js/Card';

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

  let addToWatchlist = (item) =>
    setWatchlist((prevWatchlist) => [...prevWatchlist, item]);

  let delFromWatchlist = (item) =>
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => item.imdbID !== movie.imdbID)
    );

  let checkWatchlist = (item) =>
    watchlist.find((movie) => item.imdbID === movie.imdbID);

  let handleWatchlist = (movie) => {
    checkWatchlist(movie);
    console.log(checkWatchlist);
    if (checkWatchlist === undefined) {
      addToWatchlist(movie);
    } else {
      delFromWatchlist(movie);
    }
  };

  let movieCards = movies.map((movie) => {
    return (
      <Card
        key={movie.imdbID}
        {...movie}
        addMovie={() => addToWatchlist(movie)}
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
