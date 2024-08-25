import React, { useContext, useState } from "react";
import { getFiltredUsers } from "../../../../api/api";
import "./SearchBar.scss";
import { Context } from "../../../../../../pages/homePage/HomePage";


const SearchBar = () => {
  // { setUsers, setStatus, setErrorText }
  const [search, setSearch] = useState("");
  const context = useContext(Context)

  function handleSubmit(e) {
    e.preventDefault();
    getFiltredUsers(search, context.setStatus, context.setUsers, context.setErrorText);
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
