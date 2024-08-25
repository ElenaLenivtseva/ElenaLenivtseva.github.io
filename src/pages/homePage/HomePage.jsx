import React, { useState, useEffect, createContext } from "react";
import { getAllUsers } from "../../widgets/users/api/api";
import "./HomePage.scss";
import HomeTop from "./HomeComponents/HomeTop";
import HomeBody from "./HomeComponents/HomeBody";
export const Context = createContext();

const HomePage = () => {
  const [status, setStatus] = useState("loading");
  const [errorText, setErrorText] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers(setErrorText, setStatus, setUsers);
  }, []);
  
  const value = {
    status,
    setStatus,
    errorText,
    setErrorText,
    users,
    setUsers,
  };
  return (
    <Context.Provider value={value}>
      <div className="home">
        <HomeTop
          // setUsers={setUsers}
          // setStatus={setStatus}
          // setErrorText={setErrorText}
        />
        <HomeBody
          // status={status}
          // errorText={errorText}
          // tableHeaders={tableHeaders}
          // users={users}
          // setUsers={setUsers}
        />
      </div>
    </Context.Provider>
  );
};

export default HomePage;
