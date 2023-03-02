import { useEffect, useState } from 'react';
import styles from '../../css/Card/Card.module.css';
import CardDetails from './CardDetails.jsx';
const apikey = import.meta.env.VITE_API_KEY;

let Card = ({ imdbID }) => {
  const [hover, setHover] = useState(false);
  const [details, setDetails] = useState(false);
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    if (!metadata)
      fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${imdbID}`)
        .then((resp) => resp.json())
        .then((data) => setMetadata(data));
  }, []);

  if (!metadata) return null;

  // if (props.Error) return <span>{props.Error}</span>;

  return (
    <div
      className={styles.card}
      id={metadata.imdbID}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => !details && setHover(false)}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardPoster}>
          <img src={metadata.Poster} className={styles.poster} />
        </div>
      </div>
      <CardDetails
        metadata={metadata}
        hover={hover}
        setHover={setHover}
        details={details}
        setDetails={setDetails}
      />
    </div>
  );
};

export default Card;
