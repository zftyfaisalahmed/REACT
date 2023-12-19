import React from 'react'
import { Fragment } from 'react';

const GrandChild2 = (props) => {

    const {age, name} = props.userDetails
  return (
    <Fragment>
        <div className="row">
            <div className="col-12">
                <h3 className="text-secondary">
                    This is the PerGrandchild components - Practice.
                </h3>
                <div className="lead border p-3 rounded">
                    <p>User Age = <span>{age}</span></p>
                    <p>User Name = <span>{name}</span></p>
                </div>
            </div>
        </div>    
    </Fragment>
  )
}

export default GrandChild2