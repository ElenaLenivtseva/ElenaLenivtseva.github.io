import React, { useContext, useState } from "react";
import { Context } from "../../../../../pages/homePage/HomePage";

// этот компонент не только отрисовывает название колонки. По двойному клику на название колонки происходит сортировка users. Также именно с ним связано изменение ширины колонки

const TableTitle = ({
  item,
  index,
  tableHeight,
  mouseDown,
  activeIndex,
}) => {
  // item,
  // users,
  // setUsers,
  // index,
  // tableHeight,
  // mouseDown,
  // activeIndex,
  const context = useContext(Context)
  const [order, setOrder] = useState("asc");
  const sorting = (param) => {
    if (param === "address") {
      if (order === "asc") {
        const sorted = [...context.users].sort((a, b) =>
          a[param].city > b[param].city ? 1 : -1
        );
        context.setUsers(sorted);
        setOrder("desc");
      } else if (order === "desc") {
        const sorted = [...context.users].sort((a, b) =>
          a[param].city < b[param].city ? 1 : -1
        );
        context.setUsers(sorted);
        setOrder("asc");
      }
    } else {
      if (order === "asc") {
        const sorted = [...context.users].sort((a, b) =>
          a[param] > b[param] ? 1 : -1
        );
        context.setUsers(sorted);
        setOrder("desc");
      } else if (order === "desc") {
        const sorted = [...context.users].sort((a, b) =>
          a[param] < b[param] ? 1 : -1
        );
        context.setUsers(sorted);
        setOrder("asc");
      }
    }
  };
  return (
    <th
      ref={item.ref}
      className={`table__th table__title ${
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
  );
};

export default TableTitle;
