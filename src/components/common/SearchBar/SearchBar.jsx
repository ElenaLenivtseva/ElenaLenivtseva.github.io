import React, { useState } from "react";
import { getFiltredUsers } from "../../../api/api";
import "./SearchBar.scss";


const SearchBar = ({ setUsers, setStatus, setErrorText }) => {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    getFiltredUsers(search, setStatus, setUsers, setErrorText);
    setSearch("");
  }

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        className="searchBar__input"
        type="search"
        placeholder="John..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="button">Search</button>
    </form>
  );
};

export default SearchBar;
