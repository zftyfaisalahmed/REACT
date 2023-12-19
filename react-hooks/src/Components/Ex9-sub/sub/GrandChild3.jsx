import React, { useContext } from 'react'
import { Fragment } from 'react';
import { userDetailsContext } from '../../Ex9';

const GrandChild3 = () => {

    const contextData = useContext(userDetailsContext)

    // const {age, name} = props.userDetails


  return (
    <Fragment>
        <div className="row">
            <div className="col-12">
                <h3 className="text-secondary">
                    This is the Grandchild components - 2.
                </h3>
                <div className="lead border p-3 rounded">
                    <p>User Age = <span>{contextData.age}</span></p>
                    <p>User Name = <span>{contextData.name}</span></p>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default GrandChild3