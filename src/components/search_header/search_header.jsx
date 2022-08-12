import React, { useState } from 'react';
import styles from './search_header.module.css';

import search from '../../../src/search.png';
import logo from '../../../src/logo.png';

const SearchHeader = props => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = event => {
    alert('Input submitted: ' + searchValue);
    event.preventDefault();
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
        <p>YouTube</p>
      </div>

      <div className={styles.inputformContainer}>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchValue} onChange={handleChange} />
          <button type="submit">
            <img
              src={search}
              alt="submit button"
              className={styles.submitBtn}
            />
          </button>
        </form>
      </div>

      <div>User</div>
    </div>
  );
};

export default SearchHeader;
