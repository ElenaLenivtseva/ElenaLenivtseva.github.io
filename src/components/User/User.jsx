import React from "react";

const User = ({ user }) => {
  return (
    <>
      <tr className="table__user" key={user.id}>
        <th className="table__info">{`${user.lastName} ${user.firstName}`}</th>
        <th className="table__info">{user.age}</th>
        <th className="table__info">{user.gender}</th>
        <th className="table__info">{user.phone}</th>
        <th className="table__info">{`${user.address.city} ${user.address.address}`}</th>
      </tr>
    </>
  );
};

export default User;
