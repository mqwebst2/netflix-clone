import React from 'react';
import styles from '../../css/Card/CardDetails.module.css';
import CardMetadata from './CardMetadata';
import { ReactComponent as Arrow } from '/src/assets/arrow.svg';
import { ReactComponent as Check } from '/src/assets/check.svg';
import { ReactComponent as Close } from '/src/assets/close.svg';
import { ReactComponent as Play } from '/src/assets/play.svg';
import { ReactComponent as Plus } from '/src/assets/plus.svg';

let CardDetails = (props) => {
  // let runtimeMin = parseInt(props.metadata.Runtime.split(' ')[0]);
  // let durationHours = Math.floor(runtimeMin / 60);
  // let durationMins = runtimeMin % 60;

  return (
    <div
      className={
        props.hover
          ? props.details
            ? `${styles.cardOverlay} ${styles.hover} ${styles.fullDetails}`
            : `${styles.cardOverlay} ${styles.hover}`
          : styles.cardOverlay
      }
      onClick={() => {
        if (props.details) {
          props.setDetails(false);
          props.setHover(false);
        }
      }}
    >
      <CardMetadata {...props.metadata} details={props.details} />
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
            <img src={props.Poster} className={styles.cardDetailsImage} />
            <div className={styles.cardDetailsTitle}>
              <h3>{props.Title}</h3>
            </div>
          </div>

          <div className={styles.cardDetailsInfo}>
            <div className={styles.cardDetailsBtns}>
              <button className={styles.playBtn}>
                <Play />
                {props.details && <span>Play</span>}
              </button>

              <button onClick={props.handleWatchlist}>
                {props.checkWatchlist() === undefined ? <Plus /> : <Check />}
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

            <div className={styles.cardDetailsMetadata}>
              <div className={styles.cardDetailsMetadataLeft}>
                <div className={styles.cardDetailsMetadataInfo}>
                  <span className={styles.cardDetailsMatch}>100% Match</span>
                  {props.details && (
                    <span className={styles.cardDetailsYear}>
                      {props.metadata.Year}
                    </span>
                  )}
                  <span className={styles.cardDetailsRated}>
                    {props.metadata.Rated}
                  </span>
                  <span>
                    {
                      props.metadata.totalSeasons
                        ? `${props.metadata.totalSeasons} Seasons`
                        : props.metadata
                            .Runtime /* `${durationHours}h ${durationMins}m` */
                    }
                  </span>
                </div>

                {props.details && (
                  <div className={styles.cardDetailsPlot}>
                    {props.metadata.Plot}
                  </div>
                )}
              </div>

              {props.details && (
                <div className={styles.cardDetailsMetadataRight}>
                  <div className={styles.cardDetailsMetadataCast}>
                    <span>Cast:</span> {props.metadata.Actors}
                  </div>

                  <div className={styles.cardDetailsMetadataDirector}>
                    <span>Director:</span> {props.metadata.Director}
                  </div>

                  <div className={styles.cardDetailsMetadataGenres}>
                    <span>Genre:</span> {props.metadata.Genre}
                  </div>
                </div>
              )}
            </div>

            {props.details && (
              <>
                <div className={styles.test}></div>

                <div className={styles.cardDetailsAbout}>
                  <h3>
                    <span>About</span> {props.metadata.Title}
                  </h3>
                  <div className={styles.cardDetailsAboutInfo}>
                    {/* prettier-ignore */}
                    <div><span>Director:</span> {props.metadata.Director}</div>
                    {/* prettier-ignore */}
                    <div><span>Cast:</span> {props.metadata.Actors}</div>
                    {/* prettier-ignore */}
                    <div><span>Writer:</span> {props.metadata.Writer}</div>
                    {/* prettier-ignore */}
                    <div><span>Genres:</span> {props.metadata.Genre}</div>
                    <div>
                      <span>Maturity rating:</span>
                      <span className={styles.cardDetailsRated}>
                        {props.metadata.Rated}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
