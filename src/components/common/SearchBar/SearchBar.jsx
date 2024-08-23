import React, { useState } from "react";
import "./SearchBar.scss";

const keys = [
  "firstName",
  "lastName",
  "gender",
  "age",
  "phone",
  "address.city",
  "address.address",
];

const SearchBar = ({ setUsers, setStatus, setErrorText }) => {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setUsers([]);
    let arr = [];
    for (let i = 0; i < keys.length; i++) {
      fetch(`https://dummyjson.com/users/filter?key=${keys[i]}&value=${search}`)
        .then((response) => response.json())
        .then((data) => {
          arr.push(...data.users);
          // это чревато перерендерами (столько, сколько keys), но если вынести это за пределы цикла, не срабатывает. Полагаю, потому что нет "ожидания" в синхронном коде
          setUsers([...arr]);
        })
        .catch((error) => {
          setStatus("error");
          setErrorText(error.message);
        })
        .finally(() => {
          setSearch("");
        });
      setErrorText("");
      setStatus("success");
    }
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
