import React, { useState } from "react";
import Modal from "../Modal/Modal";
import User from "../User/User";
import "./Table.scss";
import TitleTable from "../TitleTable/TitleTable";

const names = [
  { name: "Name", sortParam: "lastName" },
  { name: "Age", sortParam: "age" },
  { name: "Gender", sortParam: "gender" },
  { name: "Phone", sortParam: "" },
  { name: "Address", sortParam: "address" },
];

const Table = ({ users, setUsers }) => {
  const [user, setUser] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal() {
    setUser({});
    setModalIsOpen(false);
  }

  return (
    <>
      {users.length > 0 ? (
        <>
          <table className="table">
            <caption className="table__caption">
              Information about users
            </caption>
            <thead className="table__head">
              <tr className="table__titlesWrap">
                {names.map((item, index) => {
                  return (
                    <TitleTable
                      key={index}
                      item={item}
                      users={users}
                      setUsers={setUsers}
                    />
                  );
                })}
              </tr>
            </thead>
            <tbody className="table__body">
              {users.map((user) => {
                return (
                  <User
                    user={user}
                    key={user.id}
                    setModalIsOpen={setModalIsOpen}
                    setUser={setUser}
                  />
                );
              })}
            </tbody>
            <tfoot className="table__foot">
              <tr className="table__footRow">
                <th className="table__totalAmount">{`Amount of users: ${users.length}`}</th>
              </tr>
            </tfoot>
          </table>
          <Modal
            modalIsOpen={modalIsOpen}
            user={user}
            closeModal={closeModal}
          />
        </>
      ) : (
        <div className="table__messageWrap">
          <p className="table__message">Nothing yet...</p>
        </div>
      )}
    </>
  );
};

export default Table;
