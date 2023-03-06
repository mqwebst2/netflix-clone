import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { default as data } from '../movies';
import Card from '../components/js/Card/Card';

export default function Home() {
  const {
    watchlist: [watchlist],
  } = useOutletContext();

  const watchlistCards = watchlist.map((movieImdbID) => {
    return <Card key={movieImdbID} imdbID={movieImdbID} />;
  });

  console.log(data);

  return (
    <div id='browse'>
      <h1>Home</h1>

      <div className='home-section'>
        <h2>Popular on Myflix</h2>
      </div>
      <div className='home-section'>
        <h2>Continue Watching for GroovyQ😎</h2>
      </div>
      <div className='home-section'>
        <h2>My List</h2>
        <div className='movie-row'>{watchlistCards}</div>
      </div>
      <div className='home-section'>
        <h2>Top 10 Movies in the U.S. Today</h2>
      </div>
      <div className='home-section'>
        <h2>Because you watched [Movie]</h2>
      </div>
      <div className='home-section'>
        <h2>Top 10 TV Shows in the U.S. Today</h2>
      </div>
    </div>
  );
}
