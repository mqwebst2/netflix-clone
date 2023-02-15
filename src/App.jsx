import React, { useState } from 'react';
import './App.css';
import Header from './components/js/Header';
import Form from './components/js/Form';
import MovieCard from './components/js/MovieCard';

// API Key = e2e19760

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  let handleSubmit = (event, key, title) => {
    event.preventDefault();
    let urlTitle = title.replaceAll(' ', '+');
    fetch(`https://www.omdbapi.com/?apikey=${key}&s=${urlTitle}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };

  let addToWatchlist = (item) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, item]);
  };

  let movieCards = movies.map((movie) => {
    return (
      <MovieCard
        key={movie.imdbID}
        {...movie}
        addMovie={() => addToWatchlist(movie)}
      />
    );
  });

  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Form onSubmit={handleSubmit} />
        <div className='searchResult'>
          {movies.length ? (
            movieCards
          ) : (
            <span>Search for a movie or show you want to watch!</span>
          )}
        </div>
        <div className='watchlist'>
          <h1>My Watchlist</h1>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
