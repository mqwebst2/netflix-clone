import React from 'react';

export default function Movies() {
  return (
    <div id='movies'>
      <h1>Movies</h1>

      <div
        className='movies-grid'
        style={{ height: '60vh', width: '100%', backgroundColor: 'green' }}
      ></div>
    </div>
  );
}
