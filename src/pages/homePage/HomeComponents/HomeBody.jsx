import React from 'react'
import Table from '../../../widgets/users/UI/components/Table/Table'

const HomeBody = ({status, errorText, tableHeaders, users, setUsers}) => {
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
