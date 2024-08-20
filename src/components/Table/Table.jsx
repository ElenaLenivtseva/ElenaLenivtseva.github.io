import React from "react";
import "./Table.scss";

const Table = () => {
  return (
    <table className="table">
      <caption>Информация о пользователях</caption>
      <thead className="table__head">
        <tr className="table__titlesWrap">
          <th className="table__title">ФИО</th>
          <th className="table__title">Возраст</th>
          <th className="table__title">Пол</th>
          <th className="table__title">Телефон</th>
          <th className="table__title">Адрес</th>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr className="table__user">
          <th className="table__info">Иванов Иван Иванович</th>
          <th className="table__info">23</th>
          <th className="table__info">мужской</th>
          <th className="table__info">8-912-345-6789</th>
          <th className="table__info">г. Томск, ул. Ленина</th>
        </tr>
        <tr className="table__user">
          <th className="table__info">Александрова Александра Александровна</th>
          <th className="table__info">29</th>
          <th className="table__info">женский</th>
          <th className="table__info">8-912-345-6789</th>
          <th className="table__info">г. Томск, ул. Пушкина</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
