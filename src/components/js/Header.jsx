import { useEffect, useState } from 'react';
import styles from '../css/Header.module.css';
import { ReactComponent as Search } from '/src/assets/search.svg';
import { ReactComponent as Close } from '/src/assets/close.svg';

let Header = (props) => {
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

  return (
    <header>
      <h1>Myflix</h1>
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
          <form
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
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
