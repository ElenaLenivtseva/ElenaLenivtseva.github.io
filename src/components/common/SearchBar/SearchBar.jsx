import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFiltredUsersAsync } from "../../../features/slices/usersSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="search"
        placeholder="John"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={(e) => {
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
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
