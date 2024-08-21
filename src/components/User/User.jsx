import React, { useState } from "react";
import './User.scss'
import { useDispatch } from "react-redux";
import { openModal } from "../../features/modalSlice";

const User = ({ user }) => {
  const dispatch = useDispatch()

  return (
    <>
      <tr
        className="table__user"
        key={user.id}
        onClick={()=>dispatch(openModal(user))}
      >
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
