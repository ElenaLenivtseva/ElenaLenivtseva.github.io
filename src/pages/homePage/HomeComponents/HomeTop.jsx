import React, {useContext} from 'react'
import SearchBar from '../../../widgets/users/UI/components/common/SearchBar/SearchBar'
import { getAllUsers } from '../../../widgets/users/api/api'
import {Context} from '../HomePage'
const HomeTop = () => {
  // {setUsers, setStatus, setErrorText}
  const context = useContext(Context)
  return (
    <div className="home__top">
        <SearchBar
          // setUsers={setUsers}
          // setStatus={setStatus}
          // setErrorText={setErrorText}
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
          onClick={() => getAllUsers(context.setErrorText, context.setStatus, context.setUsers)}
        >
          Get All Users
        </button>
      </div>
  )
}

export default HomeTop
