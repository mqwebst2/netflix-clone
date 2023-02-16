import { useState } from 'react';
import styles from '../css/WatchlistMovie.module.css';
import film from '/src/assets/film.svg';
import trash from '/src/assets/trash.svg';

let WatchlistMovie = (props) => {
  return (
    <li className={styles.watchlistMovie}>
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
        <button className={styles.watchlistWatched}>
          <img src={film} />
        </button>
        <button className={styles.watchlistDelete}>
          <img src={trash} />
        </button>
      </div>
    </li>
  );
};

export default WatchlistMovie;
