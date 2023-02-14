import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/js/Form';
import MovieCard from './components/js/MovieCard';

// API Key = e2e19760

function App() {
  const [currMovie, setCurrMovie] = useState(null);

  const [values, setValues] = useState({
    apiKey: '',
    title: '',
  });
  let handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  let handleSubmit = (event, key, title) => {
    event.preventDefault();
    let urlTitle = title.replaceAll(' ', '+');
    fetch(`https://www.omdbapi.com/?apikey=${key}&t=${urlTitle}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCurrMovie(data);
      });
    setValues((prevValues) => ({
      ...prevValues,
      title: '',
    }));
  };

  return (
    <div className='App'>
      <header>My Movies App</header>
      <p>e2e19760</p>
      <Form
        {...values}
        onChange={handleChange}
        onSubmit={(e) => handleSubmit(e, values.apiKey, values.title)}
      />
      <div className='searchResult'>
        {currMovie && <MovieCard {...currMovie} />}
      </div>
    </div>
  );
}

export default App;
