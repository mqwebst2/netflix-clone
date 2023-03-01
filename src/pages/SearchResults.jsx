import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  return (
    <div id='Search Results'>
      <h2 style={{ color: '#ffffff', fontSize: '2.5rem', fontWeight: '300' }}>
        Search Results
      </h2>

      <div
        className='search-results-grid'
        style={{ height: '60vh', width: '100%', backgroundColor: 'brown' }}
      >
        {query}
      </div>
    </div>
  );
}
