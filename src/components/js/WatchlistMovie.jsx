import { useState } from 'react';
import styles from '../css/WatchlistMovie.module.css';
import film from '/src/assets/film.svg';
import trash from '/src/assets/trash.svg';

let WatchlistMovie = (props) => {
  console.log(props);
  const [watched, setWatched] = useState(false);
  let addtoWatched = () => setWatched(true);

  return (
    <li
      className={
        watched
          ? `${styles.watchlistMovie} ${styles.watched}`
          : styles.watchlistMovie
      }
    >
      <div className={styles.watchlistMovieInfo}>
        <div className={styles.watchlistMovieImage}>
          <img src={props.Poster} />
        </div>
        <div className={styles.watchlistMovieContent}>
          <h2>{props.Title}</h2>
          <span>{props.Year}</span>
        </div>
      </div>
      <div className={styles.watchlistMovieInteractions}>
        {!watched && (
          <button className={styles.watchlistWatched} onClick={addtoWatched}>
            <img src={film} />
          </button>
        )}
        <button className={styles.watchlistDelete} onClick={props.del}>
          <img src={trash} />
        </button>
      </div>
    </li>
  );
};

export default WatchlistMovie;
