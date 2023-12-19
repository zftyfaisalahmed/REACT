import React, { useContext } from 'react'
import { Fragment } from 'react';
import { userDetailsContext } from '../Ex9';
import GrandChild3 from './sub/GrandChild3';

const Child2 = () => {

    const contextData = useContext(userDetailsContext)

  return (
    <Fragment>
        <div className="row">
            <div className="col-12">
                <h3 className="text-secondary">
                    This is the Child components - 2.
                </h3>
                <div className="lead border p-3 rounded">
                    <p>User Age = <span>{contextData.age}</span></p>
                    <p>User Name = <span>{contextData.name}</span></p>
                </div>
            </div>
        </div>
        <GrandChild3></GrandChild3>
    </Fragment>
  )
}

export default Child2