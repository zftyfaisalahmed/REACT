import React from 'react'
import { NavLink } from 'react-router-dom';

const Pnf = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h3 className="display-3 text-danger text-center">
                    PAGE NOT FOUND
                </h3>
                <NavLink to={`/`} className='btn btn-outline-warning'>Back to Homepage</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Pnf