import React from "react";
import "./User.scss";

const User = ({ user, setModalIsOpen, setUser }) => {
  return (
    <>
      <tr
        className="table__user"
        key={user.id}
        onDoubleClick={() => {
          setModalIsOpen(true);
          setUser(user);
        }}
      >
        <td className="table__info">
          <span>{`${user.lastName} ${user.firstName}`}</span>
        </td>
        <td className="table__info">
          <span>{user.age}</span>
        </td>
        <td className="table__info">
          <span>{user.gender}</span>
        </td>
        <td className="table__info">
          <span>{user.phone}</span>
        </td>
        <td className="table__info">
            <span>{`${user.address.city} ${user.address.address}`}</span>
        </td>
      </tr>
    </>
  );
};

export default User;
