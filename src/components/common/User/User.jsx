import React from "react";
// import { useDispatch } from "react-redux";
// import { openModal } from "../../../features/slices/modalSlice";
import "./User.scss";

const User = ({ user, setModalIsOpen, setUser }) => {
  // const dispatch = useDispatch()

  return (
    <>
      <tr
        className="table__user"
        key={user.id}
        onClick={() => {
          setModalIsOpen(true);
          setUser(user);
        }}
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
