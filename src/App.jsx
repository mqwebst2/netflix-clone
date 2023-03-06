import { useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/js/Header';

export default function App() {
  const [movies, setMovies] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

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
