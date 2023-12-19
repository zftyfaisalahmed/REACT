import React from 'react'
import { Fragment } from 'react';
import GrandChild2 from './sub1/GrandChild2';

const GrandChild1 = (props) => {

    const {age, name} = props.userDetails
  return (
    <Fragment>
        <div className="row">
            <div className="col-12">
                <h3 className="text-secondary">
                    This is the Grandchild components - 1.
                </h3>
                <div className="lead border p-3 rounded">
                    <p>User Age = <span>{age}</span></p>
                    <p>User Name = <span>{name}</span></p>
                </div>
            </div>
        </div>  
        <GrandChild2 userDetails= {props.userDetails}/>
    </Fragment>
  )
}

export default GrandChild1