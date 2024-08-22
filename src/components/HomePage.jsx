import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAsync } from "../features/slices/usersSlice";
import SearchBar from "./common/SearchBar/SearchBar";
import Table from "./common/Table/Table";
import "./HomePage.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAsync());
  }, [dispatch]);

  const users = useSelector((state) => state.users);

  return (
    <div className="home">
      <div className="home__top">
        <SearchBar />
        <button className='button' onClick={() => dispatch(getAllUsersAsync())}>
          Get All Users
        </button>
      </div>
      <Table users={users} />
    </div>
  );
};

export default HomePage;
