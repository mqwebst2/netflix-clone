import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from '../../css/Card/CardDetails.module.css';
import CardMetadata from './CardMetadata';
import { ReactComponent as Arrow } from '/src/assets/arrow.svg';
import { ReactComponent as Check } from '/src/assets/check.svg';
import { ReactComponent as Close } from '/src/assets/close.svg';
import { ReactComponent as Play } from '/src/assets/play.svg';
import { ReactComponent as Plus } from '/src/assets/plus.svg';

let CardDetails = (props) => {
  const {
    watchlist: [watchlist, setWatchlist],
  } = useOutletContext();

  let addToWatchlist = () =>
    setWatchlist((prevWatchlist) => [...prevWatchlist, props.metadata.imdbID]);

  let delFromWatchlist = () =>
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter(
        (movieImdbID) => props.metadata.imdbID !== movieImdbID
      )
    );

  let checkWatchlist = () =>
    watchlist.find((movieImdbID) => props.metadata.imdbID === movieImdbID);

  let handleWatchlist = () => {
    if (checkWatchlist() === undefined) {
      addToWatchlist();
    } else {
      delFromWatchlist();
    }
    console.log(watchlist);
  };

  return (
    <div
      id='card-overlay'
      className={
        props.hover
          ? props.details
            ? `${styles.cardOverlay} ${styles.hover} ${styles.fullDetails}`
            : `${styles.cardOverlay} ${styles.hover}`
          : styles.cardOverlay
      }
      onClick={(evt) => {
        if (props.details && evt.target.id === 'card-overlay') {
          props.setDetails(false);
          props.setHover(false);
        }
      }}
    >
      <div
        className={
          props.hover
            ? props.details
              ? `${styles.cardDetails} ${styles.hover} ${styles.fullDetails}`
              : `${styles.cardDetails} ${styles.hover}`
            : styles.cardDetails
        }
      >
        <div className={styles.cardDetailsContent}>
          {props.details && (
            <button
              className={styles.cardDetailsClose}
              onClick={() => {
                props.setDetails(false);
                props.setHover(false);
              }}
            >
              <Close />
            </button>
          )}
          <div className={styles.cardDetailsPoster}>
            <img
              src={props.metadata.Poster}
              className={styles.cardDetailsImage}
            />
            <div className={styles.cardDetailsTitle}>
              <h3>{props.metadata.Title}</h3>
            </div>
          </div>

          <div className={styles.cardDetailsInfo}>
            <div className={styles.cardDetailsBtns}>
              <button className={styles.playBtn}>
                <Play />
                {props.details && <span>Play</span>}
              </button>

              <button onClick={handleWatchlist}>
                {checkWatchlist() ? <Check /> : <Plus />}
              </button>

              {!props.details && (
                <button
                  className={styles.detailsBtn}
                  onClick={() => props.setDetails(true)}
                >
                  <Arrow />
                </button>
              )}
            </div>

            <CardMetadata {...props.metadata} details={props.details} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
