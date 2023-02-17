import React from 'react';
import styles from '../css/Header.module.css';
import searchIcon from '/src/assets/search.png';

let Header = () => {
  return (
    <header>
      <h1>Myflix</h1>
      <div className={styles.headerSearch}>
        <img src={searchIcon} className={styles.searchIcon} />
      </div>
    </header>
  );
};

export default Header;
