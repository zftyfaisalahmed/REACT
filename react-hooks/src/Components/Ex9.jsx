import React, { createContext, useState } from 'react'
import Child1 from './Ex9-sub/Child1';
import Child2 from './Ex9-sub/Child2';

export const userDetailsContext = createContext(null);

const Ex9 = () => {

    // eslint-disable-next-line no-unused-vars
    const [userDetails, setUserDetails] = useState({
        name : "Rahu",
        age : 30
    })

  return (
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <h5 className="display-3">
                    createContext and useContext Hook
                </h5>
                <p className='text-secondary text-uppercase'> 
                    IS used to create a common data that can be accessed throughout the component hierarchy
                </p>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col text-center">
                <h3 className='display-6'> 
                    This is the Parent Component
                </h3>
            </div>
        </div>
        <hr />
        <Child1 userDetails = {userDetails}/>
        <userDetailsContext.Provider value={userDetails}>
            <Child2></Child2>
        </userDetailsContext.Provider>
    </div>
  )
}

export default Ex9