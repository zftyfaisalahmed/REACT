import React, { useContext } from 'react'
import { DataContext } from '../Context/Context'
import UserCard from './UserCard';

const Users = () => {

    const context = useContext(DataContext)

    const [users] = context.userApi.users

    console.log(`this is users components`, users)

  return (
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <h3 className="display-3 text-secondary">
                    Users
                </h3>
            </div>
        </div>
        <div className="row">
            {
                users && users.map((item, index) => {
                    return(<UserCard key={index} {...item}/>)
                })
            }
        </div>
    </div>
  )
}

export default Users