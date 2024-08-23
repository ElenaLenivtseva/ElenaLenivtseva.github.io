import React, { useEffect, useState } from "react";
import SearchBar from "./common/SearchBar/SearchBar";
import Table from "./common/Table/Table";
import "./HomePage.scss";
import {getAllUsers} from '../api/api'



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
        {status === "success" && <Table users={users} setUsers={setUsers}/>}
      </div>
    </div>
  );
};

export default HomePage;
