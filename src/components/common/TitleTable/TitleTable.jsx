import React, { useState } from "react";

const TitleTable = ({ item, users, setUsers, index, tableHeight, mouseDown, activeIndex }) => {
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
      ref={item.ref}
      className={`table__title ${
        item.name === "Phone" ? "table__titleWithoutHover" : ""
      }`}
      onDoubleClick={() => {
        if (item.name !== "Phone") {
          sorting(item.sortParam);
        }
      }}
    >
      <span> {item.name}</span>
      <div
        style={{ height: tableHeight }}
        onMouseDown={() => mouseDown(index)}
        className={`resize-handle ${activeIndex === index ? "active" : "idle"}`}
      />
    </th>
    // <th ref={ref} key={text}>
    //   <span>{text}</span>
    //   <div
    //     style={{ height: tableHeight }}
    //     onMouseDown={() => mouseDown(i)}
    //     className={`resize-handle ${
    //       activeIndex === i ? "active" : "idle"
    //     }`}
    //   />
    // </th>
  );
};

export default TitleTable;
