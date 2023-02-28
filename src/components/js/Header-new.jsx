import { useEffect, useState } from 'react';
import {
  Form,
  NavLink,
  useLoaderData,
  useNavigation,
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

let Header = (props) => {
  const { movieSearch, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const [value, setValue] = useState('');
  let handleChange = (event) => setValue(event.target.value);
  let handleClear = () => {
    setValue('');
  };

  const [toggled, setToggled] = useState(false);
  useEffect(() => {
    let handleToggle = (evt) => {
      if (
        (evt.target.id === 'search-icon' || evt.target.id === 'search-input') &&
        !toggled
      ) {
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

  useEffect(() => {
    document.getElementById('q').value = q;
  }, [q]);

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
          className={
            toggled
              ? `${styles.headerSearchInner} ${styles.toggled}`
              : styles.headerSearchInner
          }
        >
          <div className={styles.searchIcon}>
            <Search id='search-icon' />
          </div>

          <Form className={styles.headerForm} role='search'>
            <input
              id='q'
              className={styles.searchInput}
              placeholder='Titles'
              type='search'
              name='q'
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, { replace: !isFirstSearch });
              }}
            />
          </Form>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <form
            className={styles.headerForm}
            onSubmit={(evt) => props.onSubmit(evt, value)}
          >
            {toggled && (
              <>
                <input
                  autoFocus
                  type='text'
                  name='search'
                  placeholder='Titles'
                  className={styles.searchInput}
                  id='search-input'
                  value={value}
                  onChange={handleChange}
                />
                {value !== '' && (
                  <div
                    className={styles.searchInputClear}
                    onClick={handleClear}
                  >
                    <Close />
                  </div>
                )}
              </>
            )}
          </form> */
}
