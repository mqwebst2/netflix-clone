import { useEffect, useRef, useState } from 'react';
import {
  Form,
  useLoaderData,
  useNavigate,
  useSearchParams,
  useSubmit,
} from 'react-router-dom';
import { getMoviesSearch } from '../../movies';
import styles from '../css/Header.module.css';
import { ReactComponent as Search } from '/src/assets/search.svg';
import { ReactComponent as Close } from '/src/assets/close.svg';

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const movieSearch = await getMoviesSearch(q);
  return { movieSearch, q };
}

export default function Header() {
  const { q } = useLoaderData();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const submit = useSubmit();

  const [toggled, setToggled] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    let searchBar = document.getElementById('search');
    let handleToggle = (evt) => {
      let isSearchBar = searchBar.contains(evt.target);
      if (isSearchBar && !toggled) {
        setToggled(true);
        evt.stopPropagation();
      } else {
        setToggled(false);
      }
    };
    window.addEventListener('click', handleToggle);
    return () => {
      window.removeEventListener('click', handleToggle);
    };
  }, []);

  let clearInput = () => {
    setSearchParams({});
    navigate(-1);
  };
  let handleChange = (event) => {
    let searchQuery = event.target.value;

    if (searchQuery) {
      setSearchParams({ q: searchQuery });
    } else {
      clearInput();
    }
  };

  return (
    <header>
      <a href='/'>
        <h1>Myflix</h1>
      </a>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavMenu}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>TV Shows</a>
          </li>
          <li>
            <a href='#'>Movies</a>
          </li>
          <li>
            <a href='#'>My List</a>
          </li>
        </ul>
      </nav>

      <div className={styles.headerSearch}>
        <div
          id='search'
          className={
            toggled
              ? `${styles.headerSearchInner} ${styles.toggled}`
              : styles.headerSearchInner
          }
        >
          <div
            className={styles.searchIcon}
            onClick={() => {
              setToggled(true);
              setTimeout(() => inputRef.current.focus(), 200);
            }}
          >
            <Search id='search-icon' />
          </div>

          {toggled && (
            <Form className={styles.headerForm} role='search'>
              <input
                ref={inputRef}
                id='q'
                className={styles.searchInput}
                placeholder='Titles'
                type='search'
                name='q'
                value={searchParams.get('q') || ''}
                onChange={(event) => {
                  handleChange(event);
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form, { replace: !isFirstSearch });
                }}
              />

              <div
                id='search-close'
                className={styles.searchInputClear}
                onClick={() => {
                  clearInput();
                  inputRef.current.focus();
                }}
              >
                <Close />
              </div>
            </Form>
          )}
        </div>
      </div>
    </header>
  );
}
