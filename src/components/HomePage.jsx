import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAsync } from "../features/slices/usersSlice";
import Table from "./common/Table/Table";
import SearchBar from "./common/SearchBar/SearchBar";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);

  const users = useSelector((state) => state.users);

  return (
    <div>
      <SearchBar/>
      <Table users={users}/>
    </div>
  );
};

export default HomePage;
