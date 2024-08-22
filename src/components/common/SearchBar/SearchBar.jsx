import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFiltredUsersAsync } from "../../../features/slices/usersSlice";
import './SearchBar.scss'

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      getFiltredUsersAsync({
        keys: [
          "firstName",
          "lastName",
          "gender",
          "age",
          "phone",
          "address.city",
          "address.address",
        ],
        value: search,
      })
    );
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
