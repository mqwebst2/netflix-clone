import { useState } from 'react';
import styles from '../css/Card.module.css';
import { ReactComponent as Arrow } from '/src/assets/arrow.svg';
import { ReactComponent as Play } from '/src/assets/play.svg';
import { ReactComponent as Plus } from '/src/assets/plus.svg';

let Card = (props) => {
  const [hover, setHover] = useState(false);

  return !props.Error ? (
    <>
      <div
        className={hover ? `${styles.card} ${styles.hover}` : styles.card}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={
            hover ? `${styles.cardContent} ${styles.hover}` : styles.cardContent
          }
        >
          <div className={styles.cardPoster}>
            <img src={props.Poster} className={styles.poster} />
          </div>
          {hover && (
            <div className={styles.cardInfo}>
              <div className={styles.cardTitle}>
                <h3>{props.Title}</h3>
              </div>
              <div className={styles.cardInfoBtns}>
                <button className={styles.playBtn}>
                  <Play />
                </button>
                <button className={styles.watchlistBtn}>
                  <Plus />
                </button>
                <button className={styles.detailsBtn}>
                  <Arrow />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    <span>{props.Error}</span>
  );
};

export default Card;
