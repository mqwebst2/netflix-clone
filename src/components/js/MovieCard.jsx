import { useState } from 'react';
import styles from '../css/MovieCard.module.css';
import notebook from '/src/assets/notebook.svg';

let MovieCard = (props) => {
  return !props.Error ? (
    <>
      <div className={styles.card}>
        <div className={styles.cardPoster}>
          <img src={props.Poster} className={styles.poster} />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardContent}>
            <h2>{props.Title}</h2>
            <span>{props.Year}</span>
            <button onClick={props.addMovie}>
              <img src={notebook} />
              Add to watchlist
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <span>{props.Error}</span>
  );
};

export default MovieCard;
