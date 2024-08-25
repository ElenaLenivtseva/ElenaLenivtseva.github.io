import React, { useContext } from 'react'
import Table from '../../../widgets/users/UI/components/Table/Table'
import { Context } from '../HomePage'

const HomeBody = () => {
  // {status, errorText, tableHeaders, users, setUsers}
  const context = useContext(Context)
  return (
    <div className="home__body">
        {context.status === "loading" && <p>Loading...</p>}
        {context.status === "error" && (
          <div>
            <p>Sorry, there is a error.</p>
            <p>{context.errorText}</p>
          </div>
        )}
        {context.status === "success" && (
          <Table
            // headers={tableHeaders}
            minCellWidth={50}
            // users={users}
            // setUsers={setUsers}
          />
        )}
      </div>
  )
}

export default HomeBody
