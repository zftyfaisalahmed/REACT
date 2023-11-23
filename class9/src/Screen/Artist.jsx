import React from 'react'
import { NavLink } from 'react-router-dom';

const Artist = (props) => {
    const {id, name, images,genres, followers} = props

  return (
    <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
       <div className="card">
        <div className="card-body">
            <h5 className="text-center text-success">
                 {name}
            </h5>
            <div className='card-footer'>
                <NavLink to={`/track/${id}`} className="btn btn-success">Tracks</NavLink>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Artist