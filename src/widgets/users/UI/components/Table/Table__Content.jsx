import React, { useContext } from "react";
import TableUser from "./Table__User";
import { Context } from "../../../../../pages/homePage/HomePage";

const TableContent = ({ setModalIsOpen, setUser}) => {
  // users, setModalIsOpen, setUser 
  const context = useContext(Context)
  return (
    <tbody className="table__body">
      {context.users.map((user) => {
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
