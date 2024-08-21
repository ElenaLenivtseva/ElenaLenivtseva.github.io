import React from "react";
import { Link } from "react-router-dom";
import './Search.scss'

const Search = () => {
  return (
    <Link to="/searchResult">
      <div className="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="search__svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <p className="search__title">Search in the table</p>
      </div>
    </Link>
  );
};

export default Search;
