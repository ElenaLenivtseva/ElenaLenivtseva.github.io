import React, { useEffect, useState } from "react";
import SearchBar from "./common/SearchBar/SearchBar";
import Table from "./common/Table/Table";
import "./HomePage.scss";


const HomePage = () => {
  const [status, setStatus] = useState("loading");
  const [errorText, setErrorText] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setStatus("success");
        setErrorText("");
        setUsers(data.users);
      })
      .catch((error) => {
        setStatus("error");
        setErrorText(error.message);
      });
  }, []);

  return (
    <div className="home">
      <div className="home__top">
        {/* <SearchBar /> */}
        {/* <button className="button" onClick={() => dispatch(getAllUsersAsync())}>
          Get All Users
        </button> */}
      </div>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && (
        <div>
          <p>Sorry, there is a error.</p>
          <p>{errorText}</p>
        </div>
      )}
      {status === "success" && <Table users={users} />}
    </div>
  );
};

export default HomePage;
