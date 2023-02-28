import React from 'react';

export default function TvShows() {
  return (
    <div id='tv-shows'>
      <h2 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: '300' }}>
        TV Shows
      </h2>

      <div
        className='tv-shows-grid'
        style={{ height: '60vh', width: '100%', backgroundColor: 'yellow' }}
      ></div>
    </div>
  );
}
