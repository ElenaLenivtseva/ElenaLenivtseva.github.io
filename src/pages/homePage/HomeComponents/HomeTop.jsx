import React from 'react'
import SearchBar from '../../../widgets/users/UI/components/common/SearchBar/SearchBar'
import { getAllUsers } from '../../../widgets/users/api/api'

const HomeTop = ({setUsers, setStatus, setErrorText}) => {
  return (
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
  )
}

export default HomeTop
