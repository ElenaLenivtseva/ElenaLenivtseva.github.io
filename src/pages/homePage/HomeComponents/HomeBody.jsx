import React from 'react'
import Table from '../../../components/Table/Table'

const tableHeaders = [
  { name: "Name", sortParam: "lastName" },
  { name: "Age", sortParam: "age" },
  { name: "Gender", sortParam: "gender" },
  { name: "Phone", sortParam: "" },
  { name: "Address", sortParam: "address" },
];

const HomeBody = ({status, errorText, users, setUsers}) => {
  return (
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
  )
}

export default HomeBody
