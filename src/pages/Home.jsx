import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { default as data } from '../movies';
import Card from '../components/js/Card/Card';
import { ReactComponent as Arrow } from '/src/assets/arrow.svg';

export default function Home() {
  const {
    watchlist: [watchlist],
  } = useOutletContext();

  const watchlistCards = watchlist.map((movieImdbID) => {
    return <Card key={movieImdbID} imdbID={movieImdbID} />;
  });

  useEffect(() => {
    document.addEventListener('click', (e) => {
      let handle;
      if (e.target.matches('.handle')) handle = e.target;
      else handle = e.target.closest('.handle');
      console.log(handle);
      return handle;
    });
  }, []);

  return (
    <div id='browse'>
      <h1>Home</h1>

      <div className='home-section'>
        <h2>My List</h2>
        <div className='home-section-row'>
          <span className='handle handlePrev'>
            <Arrow />
          </span>
          <div className='movies-slider'>{watchlistCards}</div>
          <span className='handle handleNext'>
            <Arrow />
          </span>
        </div>
      </div>
      {/* <div className='home-section'>
        <h2>Popular on Myflix</h2>
      </div>
      <div className='home-section'>
        <h2>Continue Watching for GroovyQ😎</h2>
      </div>
      <div className='home-section'>
        <h2>My List</h2>
      </div>
      <div className='home-section'>
        <h2>Top 10 Movies in the U.S. Today</h2>
      </div>
      <div className='home-section'>
        <h2>Because you watched [Movie]</h2>
      </div>
      <div className='home-section'>
        <h2>Top 10 TV Shows in the U.S. Today</h2>
      </div> */}
    </div>
  );
}
