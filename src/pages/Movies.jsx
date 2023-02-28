import React from 'react';

export default function Movies() {
  return (
    <div id='movies'>
      <h2 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: '300' }}>
        Movies
      </h2>

      <div
        className='movies-grid'
        style={{ height: '60vh', width: '100%', backgroundColor: 'green' }}
      ></div>
    </div>
  );
}
