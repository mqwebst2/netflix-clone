import React from 'react';

export default function Home() {
  return (
    <div id='browse'>
      <h2 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: '300' }}>
        Home
      </h2>

      <div
        className='browse-grid'
        style={{ height: '60vh', width: '100%', backgroundColor: 'blue' }}
      ></div>
    </div>
  );
}
