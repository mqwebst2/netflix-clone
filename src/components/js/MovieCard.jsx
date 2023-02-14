import { useState } from 'react';
import styles from '../css/MovieCard.module.css';

let MovieCard = (props) => {
  const [clicked, setClicked] = useState(false);
  let handleClick = () => {
    setClicked(true);
  };
  let handleClose = (event) => {
    event.stopPropagation();
    setClicked(false);
  };

  const [hoverStyles, setHoverStyles] = useState({
    display: 'none',
    width: '80px',
    height: '80px',
    borderRadius: '100px',
    backgroundColor: '#1670bacc',
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: '5',
    top: '',
    left: '',
  });

  let handleMouseLeave = () => {
    setHoverStyles((prevStyles) => ({
      ...prevStyles,
      display: 'none',
      top: '',
      left: '',
    }));
  };
  let handleMouseMove = (evt) => {
    clicked
      ? handleMouseLeave()
      : setHoverStyles((prevStyles) => ({
          ...prevStyles,
          display: 'block',
          top: `calc(${evt.clientY}px - 40px)`,
          left: `calc(${evt.clientX}px - 40px)`,
        }));
  };

  return !props.Error ? (
    <>
      <div style={hoverStyles}></div>
      <div
        className={clicked ? `${styles.card} ${styles.clicked}` : styles.card}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.cardPoster}>
          <img src={props.Poster} className={styles.poster} />
        </div>
        <div className={styles.cardInfo}>
          {clicked && (
            <button className={styles.closeBtn} onClick={handleClose}>
              x
            </button>
          )}
          <div className={styles.cardContent}>
            <h2>{props.Title}</h2>
            <span>{props.Year}</span>
          </div>
        </div>
      </div>
    </>
  ) : (
    <span>{props.Error}</span>
  );
};

export default MovieCard;
