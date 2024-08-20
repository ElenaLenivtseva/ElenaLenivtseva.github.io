import React, {useState} from "react";

const Search = () => {
  const [search, setSearch] = useState("");
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
          console.log(search);
          setSearch("");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
