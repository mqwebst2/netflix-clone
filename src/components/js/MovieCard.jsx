import { useState } from 'react';
import styles from '../css/MovieCard.module.css';

let MovieCard = (props) => {
  return !props.Error ? (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <img src={props.Poster} className={styles.poster} />
        <div className={styles.movie}>
          <h2>{props.Title}</h2>
          <span>{props.Year}</span>
        </div>
      </div>
      <div className={styles.plot}>
        <span>{props.Plot}</span>
      </div>
    </div>
  ) : (
    <span>{props.Error}</span>
  );
};

export default MovieCard;
