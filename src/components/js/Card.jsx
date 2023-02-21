import { useState } from 'react';
import styles from '../css/Card.module.css';
import CardDetails from './CardDetails.jsx';

let Card = (props) => {
  const [hover, setHover] = useState(false);
  const [details, setDetails] = useState(false);

  return !props.Error ? (
    <>
      <div
        className={styles.card}
        id={props.imdbID}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => !details && setHover(false)}
      >
        <div className={styles.cardContent}>
          <div className={styles.cardPoster}>
            <img src={props.Poster} className={styles.poster} />
          </div>
        </div>
        <CardDetails
          hover={hover}
          setHover={setHover}
          details={details}
          setDetails={setDetails}
          {...props}
        />
      </div>
    </>
  ) : (
    <span>{props.Error}</span>
  );
};

export default Card;
