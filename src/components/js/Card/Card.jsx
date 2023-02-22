import { useEffect, useState } from 'react';
import styles from '../../css/Card/Card.module.css';
import CardDetails from './CardDetails.jsx';
const apikey = import.meta.env.VITE_API_KEY;

let Card = (props) => {
  const [hover, setHover] = useState(false);
  const [details, setDetails] = useState(false);
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${props.imdbID}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setMetadata(data);
      });
  }, []);

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
          metadata={metadata}
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
