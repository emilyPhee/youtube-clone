import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';
import { Link, useNavigate } from 'react-router-dom';

const SearchHeader = memo(({ onSearch }) => {
  const navigate = useNavigate();

  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);

    navigate('./', { replace: true });
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  console.log('header!!!');
  return (
    <div className={styles.headerContainer}>
      <Link className={styles.linkStyle} to="/">
        <div className={styles.logoContainer}>
          <img src="/images/logo.png" alt="logo" />
          <p>YouTube</p>
        </div>
      </Link>

      <div className={styles.searchContainer}>
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

      <a href="https://github.com/emilyPhee" target="_blank" rel="noreferrer">
        <div className={styles.user}></div>
      </a>
    </div>
  );
});

export default SearchHeader;
