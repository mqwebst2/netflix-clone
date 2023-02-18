import { useEffect, useState } from 'react';
import styles from '../css/Header.module.css';
import searchIcon from '/src/assets/search.png';
import closeIcon from '/src/assets/close.png';

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
          <img
            src={searchIcon}
            className={styles.searchIcon}
            id='search-icon'
          />
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
                    <img src={closeIcon} />
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
