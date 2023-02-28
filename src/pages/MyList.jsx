import React from 'react';

export default function MyList() {
  return (
    <div id='my-list'>
      <h2 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: '300' }}>
        My List
      </h2>

      <div
        className='watchlist-grid'
        style={{ height: '60vh', width: '100%', backgroundColor: 'red' }}
      ></div>
    </div>
  );
}
