import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="logo" />
        <p>YouTube</p>
      </div>

      <div className={styles.inputformContainer}>
        <div className={styles.inputContainer}>
          <input
            ref={inputRef}
            type="search"
            placeholder="Search..."
            onKeyPress={onKeyPress}
          />
        </div>
        <button type="submit" onClick={onClick}>
          <img
            src="/images/search.png"
            alt="submit button"
            className={styles.submitBtn}
          />
        </button>
      </div>

      <div className={styles.user}></div>
    </div>
  );
};

export default SearchHeader;
