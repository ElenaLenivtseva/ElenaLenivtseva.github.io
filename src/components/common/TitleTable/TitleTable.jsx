import React, { useState } from "react";

const TitleTable = ({ item, users, setUsers }) => {
  const [order, setOrder] = useState("asc");
  const sorting = (param) => {
    if (param === "address") {
      if (order === "asc") {
        const sorted = [...users].sort((a, b) =>
          a[param].city > b[param].city ? 1 : -1
        );
        setUsers(sorted);
        setOrder("desc");
      } else if (order === "desc") {
        const sorted = [...users].sort((a, b) =>
          a[param].city < b[param].city ? 1 : -1
        );
        setUsers(sorted);
        setOrder("asc");
      }
    } else {
      if (order === "asc") {
        const sorted = [...users].sort((a, b) =>
          a[param] > b[param] ? 1 : -1
        );
        setUsers(sorted);
        setOrder("desc");
      } else if (order === "desc") {
        const sorted = [...users].sort((a, b) =>
          a[param] < b[param] ? 1 : -1
        );
        setUsers(sorted);
        setOrder("asc");
      }
    }
  };
  return (
    <th
      className={`table__title ${
        item.name === "Phone" ? "table__titleWithoutHover" : ""
      }`}
      onClick={() => {
        if (item.name !== "Phone") {
          sorting(item.sortParam);
        }
      }}
    >
      {item.name}
    </th>
  );
};

export default TitleTable;
