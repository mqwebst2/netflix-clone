import { useEffect, useRef, useState } from 'react';
import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams,
  useSubmit,
} from 'react-router-dom';
import { getMoviesSearch } from '../../movies';
import styles from '../css/Header.module.css';
import { ReactComponent as Search } from '/src/assets/search.svg';
import { ReactComponent as Close } from '/src/assets/close.svg';

export default function Header() {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({ q: query || null });
  const navigate = useNavigate();

  const handleSubmit = useSubmit((data) => setSearchParams({ data }));

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      handleSubmit({ q: value }, { replace: true });
      console.log(searchParams);
      // navigate(`/search?q=${value}`);
    } else {
      setSearchParams({});
      navigate(-1);
    }
  };

  const [toggled, setToggled] = useState(false);

  const inputRef = useRef(null);

  return (
    <header>
      <Link to={'browse'}>
        <h1>Myflix</h1>
      </Link>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavMenu}>
          <li>
            <Link to={'browse'}>Home</Link>
          </li>
          <li>
            <Link to={'browse/genre/tv-shows'}>TV Shows</Link>
          </li>
          <li>
            <Link to={'browse/genre/movies'}>Movies</Link>
          </li>
          <li>
            <Link to={'browse/my-list'}>My List</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.headerSearch}>
        <div
          id='search-bar'
          className={
            toggled
              ? `${styles.headerSearchInner} ${styles.toggled}`
              : styles.headerSearchInner
          }
        >
          <button
            className={styles.searchIcon}
            onClick={() => setToggled(true)}
          >
            <Search />
          </button>

          {/* See Netflix layout for reference; REMOVE FORM CONTAINER AND ONLY USE INPUT */}
          {toggled && (
            <Form
              className={styles.headerForm}
              role='search'
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                ref={inputRef}
                id='q'
                className={styles.searchInput}
                placeholder='Titles'
                type='search'
                name='q'
                value={query}
                onChange={handleChange}
              />

              <div id='search-close' className={styles.searchInputClear}>
                <Close />
              </div>
            </Form>
          )}
        </div>
      </div>
    </header>
  );
}
