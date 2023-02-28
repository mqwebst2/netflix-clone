import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { loader as HeaderLoader } from './components/js/Header';
import Home from './pages/Home';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import MyList from './pages/MyList';
import ErrorPage from './errorPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: HeaderLoader,
    children: [
      {
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
