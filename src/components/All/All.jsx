import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAsync } from "../../features/usersSlice";
import Table from "../Table/Table";

const All = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);

  const users = useSelector((state) => state.users.allUsers);
 
  return (
    <div>
      <Table users={users} />
    </div>
  );
};

export default All;
