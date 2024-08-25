import React, { useState } from "react";
import { sortAsc, sortDesc } from "../../utils/sortFunctions";

// этот компонент не только отрисовывает название колонки. По двойному клику на название колонки происходит сортировка users. Также именно с ним связано изменение ширины колонки

const TableTitle = ({
  item,
  users,
  setUsers,
  index,
  tableHeight,
  mouseDown,
  activeIndex,
}) => {
  const [orderAsc, setOrderAsc] = useState(true);
  const sorting = (param) => {
    let sorted = [];
    if (orderAsc) {
      sorted = sortAsc(users, param);
    } else {
      sorted = sortDesc(users, param);
    }
    setUsers(sorted);
    setOrderAsc(!orderAsc);
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
