import React, { useState, useEffect } from "react";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import Table from "../../components/Table/Table";
import { getAllUsers } from "../../api/api";
import "./HomePage.scss";

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
      <div className="home__top">
        <SearchBar
          setUsers={setUsers}
          setStatus={setStatus}
          setErrorText={setErrorText}
        />
        <div className="home__rules">
          <p className='home__ruleText'>
            Click twice on a user row for open an additional information about
            the user.
          </p>
          <p className='home__ruleText'>Click twice on a header for sort the result.</p>
        </div>
        <button
          className="button"
          onClick={() => getAllUsers(setErrorText, setStatus, setUsers)}
        >
          Get All Users
        </button>
      </div>
      <div className="home__body">
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && (
          <div>
            <p>Sorry, there is a error.</p>
            <p>{errorText}</p>
          </div>
        )}
        {status === "success" && (
          <Table
            headers={tableHeaders}
            minCellWidth={50}
            users={users}
            setUsers={setUsers}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
