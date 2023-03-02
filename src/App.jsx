import { useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/js/Header';
import Card from './components/js/Card/Card';
const apikey = import.meta.env.VITE_API_KEY;

export default function App() {
  const [movies, setMovies] = useState(null);
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
    if (checkWatchlist(movie) === undefined) {
      addToWatchlist(movie);
    } else {
      delFromWatchlist(movie);
    }
  };

  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Navigate to='/browse' replace />} />
        </Routes>
        <Outlet
          context={{
            movies: [movies, setMovies],
            watchlist: [watchlist, setWatchlist],
          }}
        />
      </div>
    </div>
  );
}
