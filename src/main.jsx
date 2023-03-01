import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import MyList from './pages/MyList';
import Search from './pages/SearchResults';
import ErrorPage from './errorPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: 'browse',
        element: <Home />,
      },
      {
        path: 'browse/genre/tv-shows',
        element: <TvShows />,
      },
      {
        path: 'browse/genre/movies',
        element: <Movies />,
      },
      {
        path: 'browse/my-list',
        element: <MyList />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
