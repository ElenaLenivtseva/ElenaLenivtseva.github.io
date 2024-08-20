import React from "react";
import User from "../User/User";
import "./Table.scss";

const Table = ({ users }) => {
  return (
    <table className="table">
      <caption className="table__caption">Information about users</caption>
      <thead className="table__head">
        <tr className="table__titlesWrap">
          <th className="table__title">Name</th>
          <th className="table__title">Age</th>
          <th className="table__title">Gender</th>
          <th className="table__title">Phone</th>
          <th className="table__title">Address</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {users.map((user) => {
          return <User user={user} />;
        })}
      </tbody>
      <tfoot className="table__foot">
        <tr className="table__footRow">
          <th className="table__totalAmount">{`Amount of users: ${users.length}`}</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
