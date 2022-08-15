import React, { useState } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = event => {
    handleSearch(searchValue);
    event.preventDefault();
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="logo" />
        <p>YouTube</p>
      </div>

      <div className={styles.inputformContainer}>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchValue} onChange={handleChange} />
          <button type="submit">
            <img
              src="/images/search.png"
              alt="submit button"
              className={styles.submitBtn}
            />
          </button>
        </form>
      </div>

      <div className={styles.user}></div>
    </div>
  );
};

export default SearchHeader;
