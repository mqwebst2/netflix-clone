import { useEffect } from 'react';
import styles from '../../css/Card/CardMetadata.module.css';

let CardMetadata = (props) => {
  let runtimeMin = parseInt(props.Runtime.split(' ')[0]);
  let durationHours = Math.floor(runtimeMin / 60);
  let durationMins = runtimeMin % 60;

  return (
    <>
      <div className={styles.cardMetadata}>
        <div className={styles.cardMetadataLeft}>
          <div className={styles.cardMetadataInfo}>
            <span className={styles.cardMetadataMatch}>100% Match</span>
            {props.details && (
              <span className={styles.cardMetadataYear}>{props.Year}</span>
            )}
            <span className={styles.cardMetadataRated}>{props.Rated}</span>
            <span>
              {props.totalSeasons
                ? `${props.totalSeasons} Seasons`
                : `${durationHours}h ${durationMins}m`}
            </span>
          </div>

          {props.details && (
            <div className={styles.cardMetadataPlot}>{props.Plot}</div>
          )}
        </div>

        {props.details && (
          <div className={styles.cardMetadataRight}>
            <div className={styles.cardMetadataCast}>
              <span>Cast:</span> {props.Actors}
            </div>

            <div className={styles.cardMetadataDirector}>
              <span>Director:</span> {props.Director}
            </div>

            <div className={styles.cardMetadataGenres}>
              <span>Genre:</span> {props.Genre}
            </div>
          </div>
        )}
      </div>

      {props.details && (
        <>
          <div className={styles.test}></div>

          <div className={styles.cardMetadataAbout}>
            <h3>
              <span>About</span> {props.Title}
            </h3>
            <div className={styles.cardMetadataAboutInfo}>
              {/* prettier-ignore */}
              <div><span>Director:</span> {props.Director}</div>
              {/* prettier-ignore */}
              <div><span>Cast:</span> {props.Actors}</div>
              {/* prettier-ignore */}
              <div><span>Writer:</span> {props.Writer}</div>
              {/* prettier-ignore */}
              <div><span>Genres:</span> {props.Genre}</div>
              <div>
                <span>Maturity rating:</span>
                <span className={styles.cardMetadataRated}>{props.Rated}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardMetadata;
