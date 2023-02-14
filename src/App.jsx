import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/js/Form';
import MovieCard from './components/js/MovieCard';

// API Key = e2e19760

function App() {
  const [movies, setMovies] = useState([]);

  let handleSubmit = (event, key, title) => {
    event.preventDefault();
    let urlTitle = title.replaceAll(' ', '+');
    fetch(`https://www.omdbapi.com/?apikey=${key}&s=${urlTitle}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.Search);
      });
  };

  let movieCards = movies.map((movie) => {
    return <MovieCard key={movie.imdbID} {...movie} />;
  });

  return (
    <div className='App'>
      <header>My Movies App</header>
      <Form onSubmit={handleSubmit} />
      <div className='searchResult'>{movies && movieCards}</div>
    </div>
  );
}

export default App;
