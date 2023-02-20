import { useState } from 'react';
import styles from '../css/Card.module.css';
import CardDetails from './CardDetails.jsx';

let Card = (props) => {
  const [hover, setHover] = useState(false);

  return !props.Error ? (
    <>
      <div
        className={styles.card}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={(evt) => setHover(false)}
      >
        <div className={styles.cardContent}>
          <div className={styles.cardPoster}>
            <img src={props.Poster} className={styles.poster} />
          </div>
        </div>
        <CardDetails hover={hover} {...props} />
      </div>
    </>
  ) : (
    <span>{props.Error}</span>
  );
};

export default Card;
