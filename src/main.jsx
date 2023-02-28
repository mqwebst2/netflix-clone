import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { loader as HeaderLoader } from './components/js/Header-new';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: HeaderLoader,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
