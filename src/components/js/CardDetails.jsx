import { useState } from 'react';
import styles from '../css/CardDetails.module.css';
import { ReactComponent as Arrow } from '/src/assets/arrow.svg';
import { ReactComponent as Close } from '/src/assets/close.svg';
import { ReactComponent as Play } from '/src/assets/play.svg';
import { ReactComponent as Plus } from '/src/assets/plus.svg';

let CardDetails = (props) => {
  const [details, setDetails] = useState(false);

  return (
    <div
      className={
        details
          ? `${styles.cardDetails} ${styles.fullDetails}`
          : styles.cardDetails
      }
      style={props.hover ? { display: 'flex' } : { display: 'none' }}
    >
      <div className={styles.cardDetailsContent}>
        {details && (
          <button
            className={styles.cardDetailsClose}
            onClick={() => setDetails(false)}
          >
            <Close />
          </button>
        )}
        <div className={styles.cardDetailsPoster}>
          <img src={props.Poster} className={styles.cardDetailsImage} />
          <div className={styles.cardDetailsTitle}>
            <h3>{props.Title}</h3>
          </div>
        </div>

        <div className={styles.cardDetailsInfo}>
          <div className={styles.cardDetailsBtns}>
            <button className={styles.playBtn}>
              <Play />
            </button>
            <button>
              <Plus />
            </button>
            {!details && (
              <button
                className={styles.detailsBtn}
                onClick={() => setDetails(true)}
              >
                <Arrow />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

/* {details && (
          <div className={styles.cardClose} onClick={handleToggle}>
            <Close />
          </div>
        )}

        <div className={styles.cardPoster}>
          <img src={props.Poster} className={styles.poster} />
        </div>

        {(hover || details) && (
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
              {!details && (
                <button className={styles.detailsBtn} onClick={handleToggle}>
                  <Arrow />
                </button>
              )}
            </div>
          </div>
        )} */
