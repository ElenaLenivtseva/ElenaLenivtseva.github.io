import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../api/api";
import "./HomePage.scss";
import HomeTop from "./HomeComponents/HomeTop";
import HomeBody from "./HomeComponents/HomeBody";

const tableHeaders = [
  { name: "Name", sortParam: "lastName" },
  { name: "Age", sortParam: "age" },
  { name: "Gender", sortParam: "gender" },
  { name: "Phone", sortParam: "" },
  { name: "Address", sortParam: "address" },
];


const HomePage = () => {
  const [status, setStatus] = useState("loading");
  const [errorText, setErrorText] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers(setErrorText, setStatus, setUsers);
  }, []);

  
  return (
    <div className="home">
      <HomeTop
        setUsers={setUsers}
        setStatus={setStatus}
        setErrorText={setErrorText}
      />
      <HomeBody
        status={status}
        errorText={errorText}
        tableHeaders={tableHeaders}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
};

export default HomePage;
