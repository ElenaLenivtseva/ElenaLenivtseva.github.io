import React from "react";
import User from "../common/User/User";

const TableContent = ({users, setModalIsOpen, setUser}) => {
  return (
    <tbody>
      {users.map((user)=>{
        return <User user={user}
        key={user.id}
        setModalIsOpen={setModalIsOpen}
        setUser={setUser}/>
      })}
    </tbody>
  );
};

export default TableContent;
