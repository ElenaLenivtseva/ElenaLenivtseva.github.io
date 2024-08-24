import React from "react";
import TableUser from "./Table__User";

const TableContent = ({ users, setModalIsOpen, setUser }) => {
  return (
    <tbody className="table__body">
      {users.map((user) => {
        return (
          <TableUser
            user={user}
            key={user.id}
            setModalIsOpen={setModalIsOpen}
            setUser={setUser}
          />
        );
      })}
    </tbody>
  );
};

export default TableContent;
