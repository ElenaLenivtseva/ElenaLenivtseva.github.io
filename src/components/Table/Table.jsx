import React, { useEffect } from "react";
import "./Table.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAsync } from "../../features/usersSlice";

const Table = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);

  const users = useSelector((state) => state.users.allUsers);

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
          return (
            <tr className="table__user" key={user.id}>
              <th className="table__info">{`${user.lastName} ${user.firstName}`}</th>
              <th className="table__info">{user.age}</th>
              <th className="table__info">{user.gender}</th>
              <th className="table__info">{user.phone}</th>
              <th className="table__info">{`${user.address.city} ${user.address.address}`}</th>
            </tr>
          );
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
