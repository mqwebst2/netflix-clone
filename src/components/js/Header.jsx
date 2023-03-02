import { useEffect, useRef, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import styles from '../css/Header.module.css';
import { ReactComponent as SearchIcon } from '/src/assets/search.svg';
import { ReactComponent as CloseIcon } from '/src/assets/close.svg';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [lastPage, setLastPage] = useState();
  const [query, setQuery] = useState();
  const [toggled, setToggled] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ q: query } || '');
  const isFirstSearch = searchParams == '';

  useEffect(() => {
    if (location.pathname !== '/search') setLastPage(location.pathname);
  }, [location]);

  useEffect(() => {
    let searchBar = document.getElementById('search-bar');
    let handleSearchBarToggle = (evt) => {
      if (!searchBar.contains(evt.target)) setToggled(false);
    };
    window.addEventListener('click', handleSearchBarToggle);
    return () => {
      window.removeEventListener('click', handleSearchBarToggle);
    };
  }, []);

  const handleChange = () => {
    const value = inputRef.current.value;
    setQuery(value);

    if (value) {
      navigate(`/search?q=${value}`, {
        replace: !isFirstSearch,
      });
    } else {
      setSearchParams();
      navigate(lastPage, { replace: true });
    }
  };

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
            <SearchIcon />
          </button>

          {toggled && (
            <div className={styles.headerForm} role='search'>
              <input
                autoFocus
                ref={inputRef}
                id='q'
                className={styles.searchInput}
                placeholder='Titles'
                type='search'
                name='q'
                value={query || ''}
                onChange={handleChange}
              />

              {query && (
                <div
                  id='search-close'
                  className={styles.searchInputClear}
                  onClick={(e) => {
                    inputRef.current.value = '';
                    handleChange();
                    e.stopPropagation();
                    inputRef.current.focus();
                  }}
                >
                  <CloseIcon />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
