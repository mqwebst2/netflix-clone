import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../components/js/Card/Card';

export default function MyList() {
  const {
    watchlist: [watchlist],
  } = useOutletContext();

  const watchlistCards = watchlist.map((movieImdbID) => {
    return <Card key={movieImdbID} imdbID={movieImdbID} />;
  });

  return (
    <div id='my-list'>
      <h2 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: '300' }}>
        My List
      </h2>

      <div className='searchResult'>
        {watchlist.length ? (
          watchlistCards
        ) : (
          <span>Add movies to your watchlist and you'll see them here!</span>
        )}
      </div>
    </div>
  );
}
